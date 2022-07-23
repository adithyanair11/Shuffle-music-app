import './sidebar-option.styles.css';
import { useNavigate } from 'react-router-dom';
export const SideBarOption = ({name,Icon,link}) => {
    const navigate = useNavigate();
    return(
        <div className='sidebar-option'>
            <div onClick={() => navigate(link)} className='option-container'>
                <Icon className='option-icon'/>
                <h4>{name}</h4>
            </div>    
        </div>
    )
}