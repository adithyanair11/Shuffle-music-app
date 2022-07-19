import './login.styles.css';
import { loginUrl } from '../../utils/spotify';

export const Login = () => {
    return(
        <div className='login-page'>
            <div className='logo-login'>
                <img src="https://webstockreview.net/images/color-clipart-headphone-8.png" alt="logo"/>
            </div>
            <h1>welcome to shuffle</h1>
            <a href={loginUrl} className="login-button">log in with spotify</a>
        </div>
    )
}