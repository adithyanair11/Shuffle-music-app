import './song.styles.css';

export const Song = ({track,image}) => {
    const truncate = (string,n) => {
        return string?.length > n ? string.substr(0,n-1) + '...' : string;
    }
    return(
        <div className='song-row'>
            {
                image ?
                (<img className="song-name-album" src={image} alt="track-image"/>)
                :
                (<img className="song-name-album" src={track.album.images[0].url} alt="track-image"/>)
            }
            <div className='song-row-info'>
                <h5>{track.name}</h5>
                <p>
                    {
                        truncate(track.artists.
                            map((artist) => artist.name).join(", "),25)
                    }
                      {image ? null : track.album.name}
                </p>
            </div>
        </div>
    )
}
