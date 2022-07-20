import { SEARCH_ACTION_TYPES } from "./search.types";
import {createAction} from '../../utils/reducer.utils';


export const setSearchTrack = (track) => {
    return createAction(SEARCH_ACTION_TYPES.SET_TRACK,track);
}