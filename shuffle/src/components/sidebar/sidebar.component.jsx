import './sidebar.styles.css';
import { SideBarOption } from '../sidebar-option/sidebar-option.component';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SpotifyWebApi from 'spotify-web-api-node';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {selectAccessToken } from '../../store/user/user.selector';
import { setUserPlaylists } from '../../store/user/user.action';
const spotifyApi = new SpotifyWebApi({
    clientId: '3af44969d17340bb8bcd37790457c1f4'
}); 

export const SideBar = () => {
    const dispatch = useDispatch();
    const token = useSelector(selectAccessToken);
    useEffect(() => {
        spotifyApi.setAccessToken(token);
        spotifyApi.getUserPlaylists()
        .then((res) => dispatch(setUserPlaylists(res.body.items)))
        .catch((err) => console.log(err));
    },[token])

    return(
        <div className='sidebar'>
            <div className='sidebar-logo-container'>
                <img className="sidebar-logo" src="https://webstockreview.net/images/color-clipart-headphone-8.png" alt="logo"/>
                <span className='logo-name'>shuffle</span>
            </div>
           <div className='side-bar-options-main'>
            <SideBarOption link="search" name="Search" Icon={SearchIcon}/>
            <SideBarOption link="/" name="Home" Icon={HomeIcon}/>
            <SideBarOption link="discover" name="Discover" Icon={LibraryMusicIcon}/>
           </div>
        </div>
    )
}