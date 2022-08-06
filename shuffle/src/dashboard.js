import './dashboard.css'
import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import {setCurrentUser,setUserAccessToken} from './store/user/user.action';
import {selectCurrentUser} from './store/user/user.selector';
import SpotifyWebApi from 'spotify-web-api-node';
import {Route,Routes} from 'react-router-dom';
import { SideBar } from "./components/sidebar/sidebar.component";
import { HomePage } from "./routes/home/home.component";
import { DiscoverPage } from './routes/discover/discover.component';
import {Footer} from './components/footer/footer.component';
import { Header } from './components/header/header.component';
import { SearchPage } from './routes/search/search.component';
const spotifyApi = new SpotifyWebApi({
    clientId: '3af44969d17340bb8bcd37790457c1f4'
}); 
export const DashBoard = ({accessToken}) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    
    useEffect(() => {
        if(!accessToken) return
        dispatch(setUserAccessToken(accessToken));
        spotifyApi.setAccessToken(accessToken);
        spotifyApi.getMe()
        .then(data => dispatch(setCurrentUser(data.body)))
        .catch((err) => console.log(err));

        
    },[accessToken]);

    return (
        <div className="dash-board">
            <div className="dash-board-body">
                <SideBar />
                <div className='body'>
                {
                    currentUser ?
                    (<Header user={currentUser}/>)
                    :
                    null
                }
                    <Routes>
                        <Route exact index path="/*" element={<HomePage />}/>
                        <Route path="discover/*" element={<DiscoverPage />} />
                        <Route path="search" element={<SearchPage/>} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </div>
    )
}