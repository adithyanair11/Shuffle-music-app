import {USER_ACTION_TYPES} from './user.types';


const INITIAL_STATE = {
    spotifyApi: null,
    currentUser: '',
    accessToken: '',
    userPlaylists: []
}


export const userReducer = (state=INITIAL_STATE,action) => {
    const {type,payload} = action;
    switch(type){
        case USER_ACTION_TYPES.SET_SPOTIFY:
            return{
                ...state,
                spotifyApi: payload
            }
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: payload
            }
        case USER_ACTION_TYPES.SET_USER_TOKEN: 
            return{
                ...state,
                accessToken: payload
            }
        case USER_ACTION_TYPES.SET_USER_PLAYLISTS:
            return{
                ...state,
                userPlaylists: payload
            }    
        default:
            return state;        
    }
}