import { Component, OnInit } from '@angular/core'; 
import { Store } from '@ngrx/store';  
import { IMonster } from 'src/app/models/monster.model'; 
import { GameState } from 'src/app/reducers/game.reducer'; 
import { hitBack } from 'src/app/actions/monster.action'
@Component({ 
  selector: 'app-monster', 
  templateUrl: './monster.component.html', 
  styleUrls: ['./monster.component.scss'] 
}) 
export class MonsterComponent implements OnInit { 
  monster?: IMonster; 
  displayPopup :boolean = false;
  // Récupérons le store grace a l'injection de dépendance
  constructor(private store: Store<{ game: GameState }>) { 
  } 
  
  // Lorsque le composant est initialisé la méthode ngOnInit se lance et initialise la propriété monster de notre composant
  //Ici nous récupérons le state Monster pour initialiser la propriété Monster de notre composants ce qui nous permet de l'utiliser dans monster.component.html
  ngOnInit(): void { 
    this.store.select(state => state.game).subscribe((game: GameState) => { 

      console.log('MonsterComponent', game.monster, this.monster); 
      if (game.monster.pv !== this.monster?.pv) {
        this.displayPopup = true
        const hitBackDamage = 25;
        setTimeout(() => {
          this.store.dispatch(hitBack({playerId : game.players[Math.floor(Math.random() * game.players.length)].id, hitBackDamage}));
          this.displayPopup = false
        }, 1000);
      }

      this.monster = game.monster; 
      // un petit console log pour s'assurer de ce qu'on fait 
    }); 
  }  
}