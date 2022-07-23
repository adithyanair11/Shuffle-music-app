import {Routes,Route} from 'react-router-dom';
import { HomePreview } from '../home-preview/home-preview.component';
import {ArtistPage} from '../../components/artist-page/artist-page.component'
export const HomePage = () => {
    return(
        <>
            <Routes>
                <Route index element={<HomePreview />} />
                <Route path="artist/:id/*" element={<ArtistPage />}/>
            </Routes>
        </>
    )
}