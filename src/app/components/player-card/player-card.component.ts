import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { healthGain, hitMonster, powerGain } from 'src/app/actions/player.action';
import { changeMonster } from 'src/app/actions/monster.action';
import { initialMonster } from 'src/app/models/monster.model';
import { IPlayer } from 'src/app/models/player.model';
import { GameState } from 'src/app/reducers/game.reducer';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})

export class PlayerCardComponent implements OnInit {
  @Input() player?: IPlayer;
  @Input() bgDisplay?: string;
  btnColor: string = 'btn-danger';
  introPopupDisplay?:boolean;
  introPlayers?:IPlayer[];
  gameoverPopupDisplay: boolean = false;
  actionsPopupDisplay: boolean = false;
  actionsPopupType: string = '';
  actionsPlayer!:IPlayer;
  gamePlayers!:IPlayer[];
  actionsDamage: number = 0;
  actionsCost: number = 0;
  actionsGain: string = '';
  actionsLost: string = '';

  constructor(private store: Store<{ game: GameState }>) {

  }

  ngOnInit() {
    this.actionsPopupDisplay = this.actionsPopupDisplay;
    this.store.select(state => state.game).subscribe((game: GameState) => {

      if (this.player) {
        if (game.turnArray.includes(this.player.id) || !game.survivorsArray.includes(this.player.id)) {
          this.bgDisplay = 'bg-secondary';
        } else {
          this.bgDisplay = 'bg-body';
        }
      }

      console.log('initial state', initialMonster, game.monster)
      initialMonster.id === game.monster.id ? this.introPopupDisplay = true : this.introPopupDisplay = false;
      this.introPlayers = game.players;
      game.deadArray.length == 4 ? this.gameoverPopupDisplay = true : this.gameoverPopupDisplay = false;
    })

  }
 
  onIntroButtonClicked(eventData:any){
    this.store.dispatch(changeMonster({id:2}))
  }

  fightActions(index: number) {

    switch (index) {
      case 0:
        this.store.dispatch(hitMonster({ damage: this.actionsDamage, cost: this.actionsCost, player: this.actionsPlayer }))
        break;
      case 1:
        this.store.dispatch(powerGain({ actionPlayer: this.actionsPlayer, gainOfpower: this.actionsDamage, gainOfPV: this.actionsCost, functionPlayers: this.gamePlayers }))
        break;
      case 2:
        this.store.dispatch(healthGain({ actionPlayer: this.actionsPlayer, gainOfPV: this.actionsDamage, gainOfpower: this.actionsCost, functionPlayers: this.gamePlayers }))
        break;
    }
    this.actionsPopupDisplay = false;

  }

  onButtonClicked($event: any) {
    
    
    this.store.select(state => state.game).pipe(take(1)).subscribe((game: GameState) => {
      console.log(game.players);

      if ($event.capacity.type.slice(0, 4) == 'ralf') {

        // tirage au sort de l'action de Ralf
        let ralfActionIndex = Math.floor(Math.random() * 3);

        // Instanciation de variables utiles au fonctions de combat et à la popUp
        this.actionsDamage = (Math.floor(Math.random() * 10));
        this.actionsCost = Math.floor(Math.random() * 10);
        this.actionsPlayer = $event.player;
        this.gamePlayers = game.players;

        // Instanciation de variables utiles à la popUp selon l'action tirée au sort
        switch (ralfActionIndex) {
          case 0:
            this.actionsPopupType = 'attack';
            this.actionsLost = 'de Force';
            break;
          case 1:
            this.actionsPopupType = 'all';
            this.actionsGain = 'de Force';
            this.actionsLost = 'PV';
            break;
          case 2:
            this.actionsPopupType = 'all';
            this.actionsGain = 'PV';
            this.actionsLost = 'de Force';
            break;
        }

        setTimeout(() => {
          this.fightActions(ralfActionIndex);
        }, 2000);

      } else if ($event.capacity.type.slice(0, 8) == 'milhouse') {

        let beneficiary = $event.player;
        let actionType = 'single';
        game.players.forEach(player => {
          if (player.name == 'Lisa'){
            beneficiary = player;
            actionType = 'lisa';
          } 
        });
        this.actionsDamage = $event.capacity.damage;
        this.actionsCost = $event.capacity.cost.value;
        this.actionsPlayer = $event.player;

        switch ($event.capacity.type.slice(-4)) {
          case 'ower':
            this.actionsGain = 'de Force';
            this.actionsLost = 'PV';
            this.actionsPopupType = actionType;
            this.gamePlayers = [beneficiary];

            setTimeout(() => {
              this.fightActions(1);
            }, 2000);
            break;
          case 'Heal':
            this.actionsGain = 'PV';
            this.actionsLost = 'de Force';
            this.actionsPopupType = actionType;
            this.gamePlayers = [beneficiary];

            setTimeout(() => {
              this.fightActions(2);
            }, 2000);
            break;
        }
      } else {

        this.actionsDamage = $event.capacity.damage;
        this.actionsCost = $event.capacity.cost.value;
        this.actionsPlayer = $event.player;

        switch ($event.capacity.type.slice(-4)) {
          case 'tack':
            this.actionsPopupType = 'attack';
            this.actionsLost = 'de Force';
            setTimeout(() => {
              this.fightActions(0);
            }, 2000);
            break;
          case 'ower':
            this.actionsGain = 'de Force';
            this.actionsLost = 'PV';
            if ($event.capacity.type == 'soloPower') {
              this.actionsPopupType = 'single';
              this.gamePlayers = [$event.player];
            } else {
              this.actionsPopupType = 'all';
              this.gamePlayers = game.players;
            }
            setTimeout(() => {
              this.fightActions(1);
            }, 2000);
            break;
          case 'Heal':
            this.actionsGain = 'PV';
            this.actionsLost = 'de Force';
            if ($event.capacity.type == 'soloHeal') {
              this.actionsPopupType = 'single';
              this.gamePlayers = [$event.player];
            } else {
              this.actionsPopupType = 'all';
              this.gamePlayers = game.players;
            }
            setTimeout(() => {
              this.fightActions(2);
            }, 2000);
            break;
        }
      }
      this.actionsPopupDisplay = true;
      // console.log(this);
    });
  }


}

