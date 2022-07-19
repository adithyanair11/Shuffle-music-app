import {Routes,Route} from 'react-router-dom';
import { AlbumPage } from '../../components/album-page/album-page.component';
import { DiscoverPreview } from '../discover-preview/discover-preview.component';
import { PlayListPage } from '../../components/playlist-page/playlist-page.component';
import { ArtistPage } from '../../components/artist-page/artist-page.component';
export const DiscoverPage = () => {
    return(
        <>
            <Routes>
                <Route index element={<DiscoverPreview />}/>
                <Route path="/album/:id" element={<AlbumPage />} />
                <Route path="/playlist/:id" element={<PlayListPage />} />
                <Route path="/artist/:id" element={<ArtistPage />}/>
            </Routes>
        </>
    )
} 