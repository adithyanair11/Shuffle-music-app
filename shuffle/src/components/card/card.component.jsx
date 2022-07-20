import './card.styles.css';
import { useNavigate } from 'react-router-dom';

export const Card = ({data,id,type}) => {
    const navigate = useNavigate();
    return(
        <div onClick={() => navigate(`${type}/${id}`)} className='card' style={{
            backgroundImage: `url(${data?.images[0].url})`,
            backgroundPostion: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
        }}>
            <h4 className='name'>{data?.name}</h4>
            <div className="overlay"/>
        </div>
    )
}