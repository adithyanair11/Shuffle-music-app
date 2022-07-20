import {createAction} from '../../utils/reducer.utils';
import { PLAYER_ACTION_TYPES } from './player.types';

export const setPlaying = (bool) => {
    return createAction(PLAYER_ACTION_TYPES.SET_PLAYING,bool);
}