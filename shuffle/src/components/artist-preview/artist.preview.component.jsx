import './artist-preview.styles.css';

import { useParams,Outlet } from 'react-router-dom';
import {useSelector} from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-node';
import { selectAccessToken } from '../../store/user/user.selector';
import { useEffect, useState } from 'react';
import { Song } from '../song/song.component';
import { CategoriesPreview } from '../categories-preview/categories-preview.component';
const spotifyApi = new SpotifyWebApi({
    clientId: '3af44969d17340bb8bcd37790457c1f4'
}); 

export const ArtistPreview = () => {
    const {id} = useParams();
    const token = useSelector(selectAccessToken);
    const [name,setName] = useState('');
    const [image,setImage] = useState('');
    const [albums,setAlbums] = useState([]);
    const [artistTracks,setArtistTracks] = useState([]);
    useEffect(() => {
        spotifyApi.setAccessToken(token);

        spotifyApi.getArtist(id)
        .then(res => {
            setName(res.body.name);
            setImage(res.body.images[0].url);
        })
        .catch(err => console.log(err));

        spotifyApi.getArtistAlbums(id)
        .then(res => setAlbums(res.body.items))
        .catch(err => console.log(err));

        spotifyApi.getArtistTopTracks(id,'IN')
        .then(res => setArtistTracks(res.body.tracks))
        .catch(err => console.log(err));

    },[token])
    return(
        <div className='artist-container'>
            <div className='artist-banner' style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain"
            }}>
            </div>
            <h1 className='artist-banner-title'>{name}</h1>
            <div className='artist-info'>
                <CategoriesPreview type="album" array={albums} categoryTitle="Albums"/>
                <h1>Top Tracks</h1>
                {
                    artistTracks.map(track => <Song key={track.id} track={track}/>)
                }
            </div>
            <Outlet />
        </div>
    )
}