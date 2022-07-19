import { SEARCH_ACTION_TYPES } from "./search.types";
import {createAction} from '../../utils/reducer.utils';


export const setSearchItems = (items) => {
    return createAction(SEARCH_ACTION_TYPES.SET_SEARCH_ITEMS,items);
}