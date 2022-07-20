import './sidebar-option.styles.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export const SideBarOption = ({title,Icon,link,id}) => {
    const navigate = useNavigate();
    return(
        <div className='sidebar-option'>
        {
            Icon ?
            (
                <div onClick={() => navigate(link)} className='option-container'>
                    <Icon className='option-icon'/>
                    <h4>{title}</h4>
                </div>    
            )
            :
            <p onClick={() => navigate(`/playlist/${id}`)}>{title}</p>
        }
        </div>
    )
}