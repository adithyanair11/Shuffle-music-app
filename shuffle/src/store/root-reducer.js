import {combineReducers} from 'redux';
import {userReducer} from './user/user.reducer';
import { searchReducer } from './search/search.reducer';
export const rootReducer = combineReducers({
    user: userReducer,
    search: searchReducer
});