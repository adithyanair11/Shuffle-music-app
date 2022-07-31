import './search.styles.css';
import { SearchBox } from '../../components/search-box/search-box.component';
import { useSelector} from 'react-redux';
import { selectAccessToken } from '../../store/user/user.selector';
import SpotifyWebApi from 'spotify-web-api-node';
import { useState, useEffect} from 'react';
import {Song} from '../../components/song/song.component'
const spotifyApi = new SpotifyWebApi({
    clientId: '3af44969d17340bb8bcd37790457c1f4'
}); 
export const SearchPage = () => {
    const token = useSelector(selectAccessToken);
    const [searchField,setSearchField] = useState('');
    const [searchResults,setSearchResults] = useState([]);

    useEffect(() => {
        if(!token) return;
        if(!searchField){
            setSearchResults([]);
        }

        spotifyApi.setAccessToken(token);

        let cancel = false
        spotifyApi.searchTracks(searchField)
        .then(res => {
            if (cancel) return
            setSearchResults(res.body.tracks.items)
        })
        .catch(err => console.log(err));
        return () => cancel = true
    },[searchField,token])

    const handleChange = (e) => {
        const searchFieldString = e.target.value.toLowerCase();
        setSearchField(searchFieldString)
      }
    return(
        <div className='search-page'>
            <SearchBox 
            type="search"
            placeholder="search songs, playlists, albums"
            handleChange={handleChange}
            />

            {
                searchResults.map(result => <Song key={result.id} track={result}/>)
            }
        </div>
    )
}