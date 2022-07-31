import './album-page.styles.css';
import { useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-node';
import { selectAccessToken } from '../../store/user/user.selector';
import { useEffect, useState } from 'react';
import {Song} from '../song/song.component';


const spotifyApi = new SpotifyWebApi({
    clientId: '3af44969d17340bb8bcd37790457c1f4'
}); 
export const AlbumPage = () => {
    const {id} = useParams()
    const token = useSelector(selectAccessToken);
    const [tracks,setTracks] = useState([])
    const [name,setName] = useState('');
    const [image,setImage] = useState('');

    useEffect(() => {
        if(!token) return;
        spotifyApi.setAccessToken(token);

        spotifyApi.getAlbum(id)
        .then(res => {
            setName(res.body.name);
            setImage(res.body.images[0].url);
        })
        .catch(err => console.log(err));

        spotifyApi.getAlbumTracks(id)
        .then(res => setTracks(res.body.items))
        .catch(err => console.log(err));


    },[token])
    return(
        <div className='album-list-container'>
            <div className='album-list-banner' style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain"
            }}>
            </div>
            <h1 className='album-list-banner-title'>{name}</h1>
            {
                tracks?.map(item => <Song key={item.id} track={item} image={image}/>)
            }
        </div>
    )
}