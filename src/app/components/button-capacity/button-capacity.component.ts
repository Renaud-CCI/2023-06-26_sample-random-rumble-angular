import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameState, gameReducer } from 'src/app/reducers/game.reducer';
import { Capacity } from 'src/app/models/capacity.model';
import { IPlayer } from 'src/app/models/player.model';


@Component({
  selector: 'app-button-capacity',
  templateUrl: './button-capacity.component.html',
  styleUrls: ['./button-capacity.component.scss']
})


export class ButtonCapacityComponent {
  @Input() capacity?: Capacity;
  damage?: number;
  @Input() player?: IPlayer;
  @Input() clickable : boolean= true;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();
  @Input() btnColor?: string;

  constructor(private store: Store<{game: GameState}>) {
  }


  ngOnInit(){
    // console.log('ppl button-capacity', this.capacity)
    this.store.select(state => state.game).subscribe((game: GameState) => { 
      if(this.player && this.capacity){
        this.damage = Math.abs(this.capacity.damage);
        let variable:string = `this.player.${this.capacity.cost.name}`;
        if (game.turnArray.includes(this.player.id) || this.player.pv<=0 || this.capacity.cost.value>eval(variable)){
          this.btnColor = 'btn-secondary';
          this.clickable = false;
        } else {
          this.btnColor = this.capacity.btnBootstrapColor
          this.clickable = true;
        }

      }
    })
  }

  onClick() {
    if (this.player){
      const eventData = {
        player: this.player,
        capacity: this.capacity
      };
      this.buttonClicked.emit(eventData);
    }
  }
}

