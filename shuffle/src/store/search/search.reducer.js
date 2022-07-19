import { SEARCH_ACTION_TYPES } from "./search.types";

const INITIAL_STATE = {
    searchItems: []
}
export const searchReducer = (state=INITIAL_STATE,action) => {
    const {type,payload} = action;
    switch(type){
        case SEARCH_ACTION_TYPES.SET_SEARCH_ITEMS:
            return{
                ...state,
                searchItems: payload
            }
        default:
            return state;   
    }
}