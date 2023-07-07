import { createReducer, on } from '@ngrx/store';
import { IMonster, initialMonster } from './../models/monster.model';
import { IPlayer, initialPlayers } from './../models/player.model';
import { healthGain, hitMonster, powerGain } from './../actions/player.action';
import { hitBack, changeMonster } from './../actions/monster.action';


export interface GameState {
  monster: IMonster;
  players: IPlayer[];
  turnArray: any;
  deadArray: any;
  survivorsArray: any;
}

export const initialState: GameState = {
  monster: initialMonster,
  players: initialPlayers,
  turnArray: [],
  deadArray: [],
  survivorsArray: [1, 2, 3, 4]
};

// Fonction qui compare si toutes les valeurs du tableau a se trouvent dans le tableau b
function compareValues(a: number[], b: number[]) {
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      return true;
    }
  }
  return false;
}

// Met à jour les tableaux des joueurs survivants et des joueurs morts
function updateArrays(updatedPlayers:any) {
  const updatedDeadArray:number[] = [];
  const updatedSurvivorsArray:number[] = [];

  updatedPlayers.forEach((player:IPlayer) => {
    let clickableButtons = 0;
    player.capacities.forEach((capacity) => {
      capacity.cost.name == 'power' ? capacity.cost.value > player.power ? clickableButtons++ : '' : '';
      capacity.cost.name == 'pv' ? capacity.cost.value > player.pv ? clickableButtons++ : '' : '';
    });
    if (player.pv > 0 && clickableButtons != player.capacities.length) {
      updatedSurvivorsArray.push(player.id);
    } else {
      updatedDeadArray.push(player.id);
    }
  });

  return {
    updatedDeadArray,
    updatedSurvivorsArray,
  };
}

export const gameReducer = createReducer(
  initialState,

  on(changeMonster, (state, {id}) =>{
    return {
      ...state,
      monster: {
        ...state.monster,
        id: id
      },
    }
  }),

  on(hitMonster, function (state, { damage, cost, player }) {

    // rajoute le joueur attaquant dans le tableau des joueurs ayant joué
    let updatedTurnArray = [...state.turnArray];
    updatedTurnArray.push(player.id);

    return {
      ...state,
      turnArray: updatedTurnArray, // Met à jour le tour du tableau
      monster: {
        ...state.monster,
        pv: state.monster.pv - damage // Enlève les points de dégâts au monstre
      },
      players: state.players.map(p => {
        if (p.id === player.id) {
          return {
            ...p,
            power: p.power - cost // Retranche le coût de power du joueur
          };
        }
        return p;
      })
    };

  }),

  on(hitBack, (state, { playerId, hitBackDamage }) => {

    // Mise à jour des pv du joueur ayant reçu la riposte
    const updatedPlayers = state.players.map(player => {
      if (player.id === playerId) {        
        const updatedPv = player.pv - hitBackDamage;
        return { ...player, pv: updatedPv };
      }
      return player;
    });
    
    // Mise à jour des tableaux des joueurs survivants et des joueurs morts
    const { updatedDeadArray, updatedSurvivorsArray } = updateArrays(updatedPlayers);

    // Compare si tous les joueurs encore vivant ont joués ou non. Si oui, réinitialise le tableau des tours de jeu
    let updatedTurnArray = [...state.turnArray];
    !compareValues(updatedSurvivorsArray, updatedTurnArray) ? updatedTurnArray = [] : '';

    // Enregistre les données dans le store
    return {
      ...state,
      deadArray: updatedDeadArray,
      players: updatedPlayers,
      survivorsArray: updatedSurvivorsArray,
      turnArray: updatedTurnArray,
    };
  }),

  on(powerGain, (state, { actionPlayer, gainOfpower, gainOfPV, functionPlayers }) => {
    // Met à jour les powers du ou des joueur.s ayant reçu le soin
    const updatedPlayers = state.players.map(player => {
      for (const functionPlayer of functionPlayers) {
        if (player.id === functionPlayer.id) {
          if (player.id === actionPlayer.id) {
            const updatedpower = (player.power + gainOfpower)>player.powerMax? player.powerMax : player.power + gainOfpower;
            console.log('ppl powergain');
            const updatedPV = player.pv - gainOfPV;
            return { ...player, power: updatedpower, pv: updatedPV };
          } else {
            const updatedpower = (player.power + gainOfpower)>player.powerMax? player.powerMax : player.power + gainOfpower;
            return { ...player, power: updatedpower };
          }
        }
      }
      return player;
    });
    
    // Mise à jour des tableaux des joueurs survivants et des joueurs morts
    const { updatedDeadArray, updatedSurvivorsArray } = updateArrays(updatedPlayers);

    // Compare si tous les joueurs encore vivant ont joués ou non. Si oui, réinitialise le tableau des tours de jeu
    let updatedTurnArray = [...state.turnArray];
    updatedTurnArray.push(actionPlayer.id);
    !compareValues(updatedSurvivorsArray, updatedTurnArray) ? updatedTurnArray = [] : '';

    // Enregistre les données dans le store
    return {
      ...state,
      deadArray: updatedDeadArray,
      players: updatedPlayers,
      survivorsArray: updatedSurvivorsArray,
      turnArray: updatedTurnArray,
    };
  }),

  on(healthGain, (state, { actionPlayer, gainOfPV, gainOfpower, functionPlayers }) => {
    // Met à jour les powers du ou des joueur.s ayant reçu le soin
    const updatedPlayers = state.players.map(player => {
      for (const functionPlayer of functionPlayers) {
        if (player.id === functionPlayer.id) {
          if (player.id === actionPlayer.id) {
            const updatedpower = player.power - gainOfpower;
            const updatedPV = (player.pv + gainOfPV)>player.pvMax? player.pvMax : player.pv + gainOfPV;
            return { ...player, power: updatedpower, pv: updatedPV };
          } else {
            const updatedPV = (player.pv + gainOfPV)>player.pvMax? player.pvMax : player.pv + gainOfPV;
            return { ...player, pv: updatedPV };
          }
        }
      }
      return player;
    });
    
    // Mise à jour des tableaux des joueurs survivants et des joueurs morts
    const { updatedDeadArray, updatedSurvivorsArray } = updateArrays(updatedPlayers);

    // Compare si tous les joueurs encore vivant ont joués ou non. Si oui, réinitialise le tableau des tours de jeu
    let updatedTurnArray = [...state.turnArray];
    updatedTurnArray.push(actionPlayer.id);
    !compareValues(updatedSurvivorsArray, updatedTurnArray) ? updatedTurnArray = [] : '';

    // Enregistre les données dans le store
    return {
      ...state,
      deadArray: updatedDeadArray,
      players: updatedPlayers,
      survivorsArray: updatedSurvivorsArray,
      turnArray: updatedTurnArray,
    };
  }),



)