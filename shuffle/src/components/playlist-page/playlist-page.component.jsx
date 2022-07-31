import './playlist-page.styles.css';
import { useParams } from "react-router-dom";
import {useSelector} from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-node';
import { selectAccessToken } from '../../store/user/user.selector';
import { useEffect, useState } from 'react';
import {Song} from '../song/song.component'
const spotifyApi = new SpotifyWebApi({
    clientId: '3af44969d17340bb8bcd37790457c1f4'
}); 
export const PlayListPage = () => {
    const [tracks,setTracks] = useState([])
    const [name,setName] = useState('');
    const [image,setImage] = useState('')
    const token = useSelector(selectAccessToken);
    const {id} = useParams();

    useEffect(() => {
        if(!token) return;
        spotifyApi.setAccessToken(token);

        spotifyApi.getPlaylist(id)
        .then(res => {
            setName(res.body.name)
            setImage(res.body.images[0].url)
            setTracks(res.body.tracks.items)
        })
        .catch((err) => console.log(err));
    },[token])

    return(
        <div className='play-list-container'>
            <div className='play-list-banner' style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain"
            }}>
            </div>
            <h1 className='play-list-banner-title'>{name}</h1>
            {
                tracks?.map(item => <Song key={item.track.id} track={item.track}/>)
            }
        </div>
    )
}