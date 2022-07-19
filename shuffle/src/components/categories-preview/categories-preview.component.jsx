import './categories-preview.styles.css'
import { Card } from '../card/card.component';

export const CategoriesPreview = ({array,categoryTitle,type}) => {
    return(
        <div className='category'>
                <h1>{categoryTitle}</h1>
                <div className='category-container'>
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