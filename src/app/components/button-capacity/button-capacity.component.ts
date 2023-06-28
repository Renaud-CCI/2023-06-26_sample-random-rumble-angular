import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameState, gameReducer } from 'src/app/reducers/game.reducer';
import { hitMonster } from 'src/app/actions/player.action';
import { MonsterAttackPopUpComponent } from 'src/app/components/monster-attack-popup/monster-attack-pop-up.component';

@Component({
  selector: 'app-button-capacity',
  templateUrl: './button-capacity.component.html',
  styleUrls: ['./button-capacity.component.scss']
})
export class ButtonCapacityComponent {
  @Input() player?: any;
  // popUpDisplay: boolean = false;
  
  constructor(private store: Store<{game: GameState}>) {
    
  }


  onClick() {
    const damage = 50;
    const playerId = this.player.id;
    
    this.store.dispatch(hitMonster({damage}));
    console.log('joueur', this.player);

    // Utiliser EventEmitter pour envoyer l'event au playerCard
  }
}

