import { createAction, props } from '@ngrx/store'; 
import { IPlayer } from '../models/player.model';

export const hitBack = createAction('Monster Attack [Player]', props<{ playerId:number, hitBackDamage: number }>());