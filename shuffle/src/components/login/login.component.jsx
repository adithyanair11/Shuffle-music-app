import './login.styles.css';
export const Login = () => {
const LOGIN_URI = process.env.NODE_ENV !== 'production' ? 'http://localhost:8888/login' : 'https://shuffle-music-new.herokuapp.com/login';

    return(
        <div className='login-page'>
            <div className='logo-login'>
                <img src="https://webstockreview.net/images/color-clipart-headphone-8.png" alt="logo"/>
            </div>
            <h1>welcome to shuffle</h1>
            <a href={LOGIN_URI} className="login-button">log in with spotify</a>
        </div>
    )
}