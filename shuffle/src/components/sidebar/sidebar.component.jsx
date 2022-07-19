import './sidebar.styles.css';
import { SideBarOption } from '../sidebar-option/sidebar-option.component';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SpotifyWebApi from 'spotify-web-api-node';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {selectUserPlaylists,selectAccessToken } from '../../store/user/user.selector';
import { setUserPlaylists } from '../../store/user/user.action';
const spotifyApi = new SpotifyWebApi({
    clientId: '3af44969d17340bb8bcd37790457c1f4'
}); 

export const SideBar = () => {
    const dispatch = useDispatch();
    const userPlaylists = useSelector(selectUserPlaylists);
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
            <SideBarOption link="search" title="Search" Icon={SearchIcon}/>
            <SideBarOption link="/" title="Home" Icon={HomeIcon}/>
            <SideBarOption link="discover" title="Discover" Icon={LibraryMusicIcon}/>
            <strong className='sidebar-title'>PLAYLISTS</strong>
            <hr />
            {
                userPlaylists?.map(playlist => <SideBarOption key={playlist.id} id={playlist.id} title={playlist.name}/>)
            }
        </div>
    )
}