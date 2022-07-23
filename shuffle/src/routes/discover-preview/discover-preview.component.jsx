import './discover-preview.styles.css';
import SpotifyWebApi from 'spotify-web-api-node';
import {useSelector} from 'react-redux'
import { selectAccessToken } from '../../store/user/user.selector';
import { useEffect, useState } from 'react';
import { selectUserPlaylists } from '../../store/user/user.selector';
import { CategoriesPreview } from '../../components/categories-preview/categories-preview.component';
const spotifyApi = new SpotifyWebApi({
    clientId: '3af44969d17340bb8bcd37790457c1f4'
}); 


export const DiscoverPreview = () => {
    const token = useSelector(selectAccessToken);
    const playlists = useSelector(selectUserPlaylists);
    const [followedArtists, getFollowedArtists] = useState([]);
    const [savedAlbums, getSavedAlbums] = useState([]);
    const [featuredPlaylists,getFeaturedPlaylists] = useState([]);

    useEffect(() => {
        spotifyApi.setAccessToken(token);

        spotifyApi.getMySavedAlbums()
        .then(res => getSavedAlbums(res.body.items))
        .catch((err) => console.log(err));

        spotifyApi.getFeaturedPlaylists()
        .then(res => getFeaturedPlaylists(res.body.playlists.items))
        .catch(err => console.log(err));


        spotifyApi.getFollowedArtists()
        .then(res => getFollowedArtists(res.body.artists.items))
        .catch(err => console.log(err));

    },[token])

    return(
        <div className='discover-page'>
            <CategoriesPreview type="artist" array={followedArtists} categoryTitle="Followed Artists"/>
            <CategoriesPreview type="playlist" array={playlists} categoryTitle="Your Playlists"/>
            <CategoriesPreview type="album" array={savedAlbums} categoryTitle="Your Saved Albums"/>
            <CategoriesPreview type="playlist" array={featuredPlaylists} categoryTitle="Featured Playlists"/>
        </div>
    )
} 