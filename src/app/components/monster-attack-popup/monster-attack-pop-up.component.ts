import { Component, Input, OnInit } from '@angular/core';
import { IPlayer } from 'src/app/models/player.model';
import { GameState } from 'src/app/reducers/game.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-monster-attack-pop-up',
  templateUrl: './monster-attack-pop-up.component.html',
  styleUrls: ['./monster-attack-pop-up.component.scss']
})

export class MonsterAttackPopUpComponent {

  @Input() popUpDisplay?:boolean;
  @Input() attackedPlayer?:IPlayer;
  @Input() hitBackDamage?:number;
  
  constructor(private store: Store<{ game: GameState }>) {
  }

  ngOnInit():void{
    this.store.select(state => state.game).subscribe((game: GameState) => { 
      
      // console.log('ppl popup', this.attackedPlayer);
    }
    )};


}
