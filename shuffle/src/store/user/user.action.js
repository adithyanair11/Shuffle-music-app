import {createAction} from '../../utils/reducer.utils';
import {USER_ACTION_TYPES} from './user.types';

export const setSpotifyApi = (api) => {
    return createAction(USER_ACTION_TYPES.SET_SPOTIFY,api);
}


export const setCurrentUser = (user) => {
    return createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user);
}

export const setUserAccessToken = (token) => {
    return createAction(USER_ACTION_TYPES.SET_USER_TOKEN,token);
}

export const setUserPlaylists = (playlists) => {
    return createAction(USER_ACTION_TYPES.SET_USER_PLAYLISTS,playlists);
} 