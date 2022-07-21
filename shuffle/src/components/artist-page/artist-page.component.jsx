import {Routes,Route} from 'react-router-dom';
import { ArtistPreview } from '../artist-preview/artist.preview.component';
import {AlbumPage} from '../album-page/album-page.component';
export const ArtistPage = () => {
    return(
        <>
            <Routes>
                <Route index element={<ArtistPreview />}/>
                <Route path="album/:id" element={<AlbumPage />} />
            </Routes>
        </>
    )
}