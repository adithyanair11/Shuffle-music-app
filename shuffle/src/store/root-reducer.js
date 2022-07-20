import {combineReducers} from 'redux';
import {userReducer} from './user/user.reducer';
import { searchReducer } from './search/search.reducer';
import { playerReducer } from './player/player.reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    search: searchReducer,
    player: playerReducer
});