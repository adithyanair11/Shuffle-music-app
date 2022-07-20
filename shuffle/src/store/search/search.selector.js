import {createSelector} from 'reselect';

const selectSearchReducer = (state) => state.search;


export const selectSearchTrack = createSelector([selectSearchReducer],(search) => search.track);