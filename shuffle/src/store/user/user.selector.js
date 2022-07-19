import {createSelector} from 'reselect';


const selectUserReducer = (state) => state.user;


export const selectSpotifyApi = createSelector([selectUserReducer],(user) => user.spotifyApi)
export const selectCurrentUser = createSelector([selectUserReducer],(user) => user.currentUser);

export const selectAccessToken = createSelector([selectUserReducer],(user) => user.accessToken);

export const selectUserPlaylists = createSelector([selectUserReducer],(user) => user.userPlaylists);