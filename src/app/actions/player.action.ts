import { createAction, props } from '@ngrx/store'; 
import { IPlayer } from '../models/player.model';

export const hitMonster = createAction('[Player] Attack Monster', props<{ damage: number }>());

