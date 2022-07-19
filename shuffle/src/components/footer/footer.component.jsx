import './footer.styles.css';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import  Grid  from '@mui/material/Grid';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import Slider from '@mui/material/Slider';
export const Footer = () => {
    return(
        <div className='footer'>
            <div className='footer-left footer-item' >
                <img src="" alt=""/>
                <div className='footer-song-info'>
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className='footer-center footer-item'>
                <ShuffleIcon className='footer-icon'/>
                <SkipPreviousIcon className='footer-icon'/>
                <PlayCircleOutlineOutlinedIcon className='footer-icon' fontSize='large'/>
                <SkipNextIcon className='footer-icon'/>
                <RepeatIcon className='footer-icon'/>
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