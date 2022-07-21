import './categories-preview.styles.css'
import { Card } from '../card/card.component';
import { useRef,useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export const CategoriesPreview = ({array,categoryTitle,type}) => {
    const itemRef = useRef()
    const [slideNumber,setSlideNumber] = useState(0);
    const handleClick = (direction) => {
        let distance = itemRef.current.getBoundingClientRect().x - 260;
        if(direction === 'left' && slideNumber > 1){
            setSlideNumber(slideNumber-1);
            itemRef.current.style.
            transform = `translateX(${168 + distance}px)`;
        }
        if(direction === 'right' && slideNumber < Math.floor(array.length/2)){
            setSlideNumber(slideNumber+1)
            itemRef.current.style.transform = `translateX(${-168 + distance}px)`;
        }
    }
    return(
        <div className='category'>
                <div className='category-header'>
                    <h1>{categoryTitle}</h1>
                    {
                        array.length > 6 ?
                        (<div className='arrows'>
                        <ArrowBackIosIcon className='arrow' onClick={() => handleClick('left')}/>
                        <ArrowForwardIosIcon className='arrow' onClick={() => handleClick('right')}/>
                        </div>)
                        :
                        null
                    }
                </div>
                <div className='category-container' ref={itemRef}>
                    {
                        array?.map(item => {
                            if(item.album) {
                                return <Card key={item.album.id} data={item.album} id={item.album.id} type={type}/>
                            }else{
                                return <Card key={item.id} data={item} id={item.id} type={type}/>
                            }
                        })
                    }
                </div>
            </div>
    )
}