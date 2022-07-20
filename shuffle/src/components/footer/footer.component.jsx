import './footer.styles.css';
import {useDispatch, useSelector} from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-node';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import  Grid  from '@mui/material/Grid';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import Slider from '@mui/material/Slider';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import { selectAccessToken } from '../../store/user/user.selector';
import { selectSearchTrack } from '../../store/search/search.selector';
import {setPlaying} from '../../store/player/player.actions';
import {selectPlaying} from '../../store/player/player.selector';
import { useEffect } from 'react';
import { setSearchTrack } from '../../store/search/search.action';

const spotifyApi = new SpotifyWebApi({
    clientId: '3af44969d17340bb8bcd37790457c1f4'
}); 
export const Footer = () => {
    const token = useSelector(selectAccessToken)
    const track = useSelector(selectSearchTrack);
    const playing = useSelector(selectPlaying);
    const dispatch = useDispatch()
    const truncate = (string,n) => {
        return string?.length > n ? string.substr(0,n-1) + '...' : string;
    }

    useEffect(() => {
        spotifyApi.setAccessToken(token);
        spotifyApi.getMyCurrentPlayingTrack()
        .then(res => {
            dispatch(setSearchTrack(res.body.item));
            dispatch(setPlaying(res.body.is_playing))
        })
        .catch(err => console.log(err));

    },[token]);

    const handlePlayPause = () => {
        if(playing){
            spotifyApi.pause()
            dispatch(setPlaying(false));
        }else{
            spotifyApi.play();
            dispatch(setPlaying(true));
        }
    }

    const skipNext = () => {
        spotifyApi.skipToNext();
        spotifyApi.getMyCurrentPlayingTrack()
        .then(res => dispatch(setSearchTrack(res.body.item)))
        .catch(err => console.log(err));
        dispatch(setPlaying(true));
    }
    const skipPrev = () => {
        spotifyApi.skipToPrevious();
        spotifyApi.getMyCurrentPlayingTrack()
        .then(res => dispatch(setSearchTrack(res.body.item)))
        .catch(err => console.log(err));
        dispatch(setPlaying(true));
    }
    const setShuffle = () => {
        spotifyApi.setShuffle(true);
        spotifyApi.getMyCurrentPlayingTrack()
        .then(res => dispatch(setSearchTrack(res.body.item)))
        .catch(err => console.log(err));
        dispatch(setPlaying(true));
    }
    const setRepeat = () => {
        spotifyApi.setRepeat('track');
        spotifyApi.getMyCurrentPlayingTrack()
        .then(res => dispatch(setSearchTrack(res.body.item)))
        .catch(err => console.log(err));
        dispatch(setPlaying(true));
    }
    return(
        <div className='footer'>
            <div className='footer-left footer-item' >
                {
                    track ?
                    (<img src={track?.album?.images[0]?.url} alt="image"/>)
                    :
                    null
                }
                <div className='footer-song-info'>
                    <h6>{track?.name}</h6>
                    <p>{truncate(track?.artists?.
                        map((artist) => artist?.name).join(", "),25)}</p>
                </div>
            </div>
            <div className='footer-center footer-item'>
                <ShuffleIcon onClick={setShuffle} className='footer-icon'/>
                <SkipPreviousIcon onClick={skipPrev}className='footer-icon'/>
                {
                    playing ?
                    (<PauseCircleOutlineIcon
                        onClick={handlePlayPause}
                        fontSize="large"
                        className="footer-icon"
                    />)
                    :
                    (<PlayCircleOutlineIcon
                        onClick={handlePlayPause}
                        fontSize="large"
                        className="footer-icon"
                    />)
                }
                <SkipNextIcon onClick={skipNext} className='footer-icon'/>
                <RepeatIcon onClick={setRepeat} className='footer-icon'/>
            </div>
            <div className='footer-right footer-item'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}