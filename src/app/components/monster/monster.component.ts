import { Component, OnInit } from '@angular/core'; 
import { Store } from '@ngrx/store';  
import { IMonster } from 'src/app/models/monster.model'; 
import { GameState } from 'src/app/reducers/game.reducer'; 
import { hitBack } from 'src/app/actions/monster.action';
import { IPlayer } from 'src/app/models/player.model';

@Component({ 
  selector: 'app-monster', 
  templateUrl: './monster.component.html', 
  styleUrls: ['./monster.component.scss'] 
}) 
export class MonsterComponent implements OnInit { 
  monster?: IMonster;
  displayPopup :boolean = false;
  deadDisplayPopup :boolean = false;
  attackedPlayerId:number = 0;
  attackedPlayer?: IPlayer;
  hitBackDamage : number = 25;


  // Récupérons le store grace a l'injection de dépendance
  constructor(private store: Store<{ game: GameState }>) { 
  } 
  
  // Lorsque le composant est initialisé la méthode ngOnInit se lance et initialise la propriété monster de notre composant
  //Ici nous récupérons le state Monster pour initialiser la propriété Monster de notre composants ce qui nous permet de l'utiliser dans monster.component.html
  ngOnInit(): void { 
    this.store.select(state => state.game).subscribe((game: GameState) => { 

      // console.log('MonsterComponent', game.monster.pv, this.monster?.pv); 

      if (game.monster.pv <= 0){
        this.deadDisplayPopup = true;
      }

      if (this.monster && game.monster.pv !== this.monster.pv && game.monster.pv >0) {

        this.hitBackDamage = Math.floor(Math.random() * 25);

        this.attackedPlayerId = game.survivorsArray[Math.floor(Math.random() * game.survivorsArray.length)];

        game.players.forEach(player => {
          player.id == this.attackedPlayerId ? this.attackedPlayer = player : '';
        });


        // console.log('survivorsArray : ', game.survivorsArray, 'attackedPlayerId : ', this.attackedPlayerId);

        setTimeout(() => {
          this.displayPopup = true;
        }, 500);
        setTimeout(() => {
          this.store.dispatch(hitBack({playerId : this.attackedPlayerId, hitBackDamage : this.hitBackDamage}));
          this.displayPopup = false
        }, 2500);
      }
      this.monster = game.monster; 

    }); 
  }  
}