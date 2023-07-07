import { createAction, props } from '@ngrx/store'; 
import { IPlayer } from '../models/player.model';

export const hitBack = createAction('Monster Attack [Player]', props<{ playerId:number, hitBackDamage: number }>());

export const endHitBack = createAction('end attack of the Monster', props<{ playerId:number }>());

export const changeMonster = createAction('change the id of the Monster', props<{ id:number }>());