import {createSelector} from 'reselect';

const selectSearchReducer = (state) => state.search;


export const selectSearchItems = createSelector([selectSearchReducer],(search) => search.searchItems);