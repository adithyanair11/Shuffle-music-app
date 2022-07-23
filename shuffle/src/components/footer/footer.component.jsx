import './footer.styles.css';
import {useSelector} from 'react-redux';
import { selectAccessToken } from '../../store/user/user.selector';
import { selectSearchTrack } from '../../store/search/search.selector';
import SpotifyPlayer from 'react-spotify-web-playback'
import { useEffect,useState } from 'react';
export const Footer = () => {
    const token = useSelector(selectAccessToken)
    const track = useSelector(selectSearchTrack);
    const [play,setPlay] = useState(false)


    useEffect(() => {
        setPlay(true)
    },[track.uri,token])
    return(
        <div className='footer'>
           {
            token ?
            ( <SpotifyPlayer 
                token={token}
                callback={state => {
                    if(!state.isPlaying){
                        setPlay(false);
                    }
                }}
                play={play}
                uris={track.uri ? [track.uri]: []}
                styles={{
                    activeColor: '#fff',
                    bgColor: '#282828',
                    color: '#fff',
                    loaderColor: '#fff',
                    sliderColor: '#1cb954',
                    trackArtistColor: '#ccc',
                    trackNameColor: '#fff',
                    height: 70
                  }}
                />)
                :
                null
           }
        </div>
    )
}