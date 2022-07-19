import './custom-button.styles.css';


export const BUTTON_TYPES_CLASSES = {
    login: 'login-button'
}

export const Button = ({children,buttonType, ...otherProps}) => {
    return(
        <button className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
        {...otherProps}>
            {children}
        </button>
    );
}