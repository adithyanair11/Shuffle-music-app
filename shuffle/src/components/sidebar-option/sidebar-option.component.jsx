import './sidebar-option.styles.css';
import { useNavigate } from 'react-router-dom';
export const SideBarOption = ({name,Icon,link,id}) => {
    const navigate = useNavigate();
    return(
        <div className='sidebar-option'>
        {
            Icon ?
            (
                <div onClick={() => navigate(link)} className='option-container'>
                    <Icon className='option-icon'/>
                    <h4>{name}</h4>
                </div>    
            )
            :
            <p onClick={() => navigate(`playlist/${id}`)}>{name}</p>
        }
        </div>
    )
}