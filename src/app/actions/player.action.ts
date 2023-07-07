import { createAction, props } from '@ngrx/store'; 
import { IPlayer } from '../models/player.model';

export const hitMonster = createAction('[Player] Attack Monster', props<{ damage: number , cost : number, player : IPlayer}>());

export const powerGain = createAction ('[Player] make player.s gain power', props<{ actionPlayer:IPlayer, gainOfpower:number, gainOfPV:number, functionPlayers: IPlayer[]}>());

export const healthGain = createAction ('[Player] make player.s gain pv', props<{ actionPlayer:IPlayer, gainOfPV:number, gainOfpower:number, functionPlayers: IPlayer[]}>());