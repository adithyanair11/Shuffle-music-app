import './home-preview.styles.css';
import SpotifyWebApi from 'spotify-web-api-node';
import { CategoriesPreview } from '../../components/categories-preview/categories-preview.component';
import { Song } from '../../components/song/song.component'; 
import {useSelector} from 'react-redux'
import { selectAccessToken } from '../../store/user/user.selector';
import { useEffect, useState } from 'react';

const spotifyApi = new SpotifyWebApi({
    clientId: '3af44969d17340bb8bcd37790457c1f4'
}); 
export const HomePreview = () => {
    const [topArtists,setTopArtists] = useState([]);
    const [topTracks,setTopTracks] = useState([]);
    const token = useSelector(selectAccessToken);

    useEffect(() => {
        if(!token) return;
        spotifyApi.setAccessToken(token);
        
        spotifyApi.getMyTopArtists()
        .then((res) => {
            const artists = res.body.items.filter((_,idx) => idx < 10);
            setTopArtists(artists);
        })
        .catch((err) =>  console.log(err));


        spotifyApi.getMyTopTracks()
        .then(res => setTopTracks(res.body.items))
        .catch((err) => console.log(err));


    },[token]);
    return(
        <div className='home'>
            <CategoriesPreview type="artist" array={topArtists} categoryTitle="Your Top Artists"/>
            <div className='songs'>
                <div className='songs-container'>
                    <h1>Your Top Tracks</h1>
                    {
                        topTracks?.map(item => <Song key={item.id} track={item}/>)
                    }
                </div>
            </div>
        </div>
    )
}