import { createReducer, createSelector, on } from '@ngrx/store'; 
import { IMonster, initialMonster } from './../models/monster.model'; 
import { IPlayer, Player, initialPlayers } from './../models/player.model'; 
import { hitMonster } from './../actions/player.action';
import { hitBack } from './../actions/monster.action';


export interface GameState { 
  monster: IMonster; 
  players: IPlayer[]; 
} 
  
export const initialState: GameState = { 
  monster: initialMonster, 
  players: initialPlayers
}; 
  
export const gameReducer = createReducer(
  initialState,

  on(hitMonster, function (state, { damage }) {
    return {
      ...state,
      monster : {
        ...state.monster,
        pv : state.monster.pv - damage
      }
    }

  }),

  on(hitBack, function (state, {playerId, hitBackDamage}){

    const test = state.players.map(p =>
      p.id === playerId ? { ...p, pv: p.pv - hitBackDamage } : p
    )
    
    console.log(test);

    return {
      ...state,
      players: test,
    };
  }),
)