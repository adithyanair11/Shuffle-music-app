import './card.styles.css';
import { useNavigate } from 'react-router-dom';

export const Card = ({data,id,type}) => {
    const navigate = useNavigate();
    const {name} = data;
    return(
        <div onClick={() => navigate(`${type}/${id}`)} className='card' style={{
            backgroundImage: `url(${data?.images[0].url})`,
            backgroundPostion: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <h4 className='name'>{name}</h4>
            <div className="overlay"/>
        </div>
    )
}