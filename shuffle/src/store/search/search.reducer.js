import { SEARCH_ACTION_TYPES } from "./search.types";

const INITIAL_STATE = {
    track: {}
}
export const searchReducer = (state=INITIAL_STATE,action) => {
    const {type,payload} = action;
    switch(type){
        case SEARCH_ACTION_TYPES.SET_TRACK:
            return{
                ...state,
                track: payload
            }
        default:
            return state;   
    }
}