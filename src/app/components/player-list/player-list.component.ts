import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPlayer } from 'src/app/models/player.model';
import { GameState } from 'src/app/reducers/game.reducer';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})

export class PlayerListComponent implements OnInit {

  players?:IPlayer[]
 
  // Récupérons le store grace a l'injection de dépendance
  constructor(private store: Store<{ game: GameState }>) { 
  } 

  reloadPage() {
    window.location.reload();
  }
  
  // Lorsque le composant est initialisé la méthode ngOnInit se lance et initialise la propriété player de notre composant
  //Ici nous récupérons le state player pour initialiser la propriété player de notre composants ce qui nous permet de l'utiliser dans player.component.html
  ngOnInit(): void {
    this.store.select(state => state.game).subscribe((game: GameState) => {
      console.log('store : ', game)
      this.players = game.players;
      // un petit console log pour s'assurer de ce qu'on fait 
      // console.log('player-listComponent ppl', game.players); 
      
    });
  }

}

