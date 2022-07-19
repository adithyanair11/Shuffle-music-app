import './header.styles.css';

export const Header = ({user}) => {
    return(
        <div className='avatar'>
            <img className='avatar-img' src={user?.images[0]?.url} alt="avatar-image"/>
        </div>
    )
}