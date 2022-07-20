import { PLAYER_ACTION_TYPES } from "./player.types";
const INITIAL_STATE = {
    playing: false
}

export const playerReducer = (state=INITIAL_STATE,action) => {
    const {type,payload} = action;
    switch(type){
        case PLAYER_ACTION_TYPES.SET_PLAYING:
            return{
                ...state,
                playing: payload
            }
        default:
            return state;    
    }
}