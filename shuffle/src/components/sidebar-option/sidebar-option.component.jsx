import './sidebar-option.styles.css';
import { Link } from 'react-router-dom';

export const SideBarOption = ({title,Icon,link,id}) => {
    return(
        <div className='sidebar-option'>
        {
            Icon ?
            (<Link to={link} className="link">
                <div className='option-container'>
                    <Icon className='option-icon'/>
                    <h4>{title}</h4>
                </div>    
            </Link>)
            :
            <Link to={`/playlist/${id}`} className="link"><p>{title}</p></Link>
        }
        </div>
    )
}