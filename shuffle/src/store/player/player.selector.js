import {createSelector} from 'reselect';

const selectPlayerReducer = (state) => state.player;


export const selectPlaying = createSelector([selectPlayerReducer],(player) => player.playing);