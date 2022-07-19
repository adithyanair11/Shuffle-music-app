import './search-box.styles.css';


export const SearchBox = ({type,placeholder,handleChange}) => {
    return(
        <div className="search">
            <input 
            className="search-box"
            type={type}
            placeholder={placeholder}
            onChange={handleChange}/>
        </div>
    )
}