import {Routes,Route} from 'react-router-dom';
import { HomePreview } from '../home-preview/home-preview.component';
import { PlayListPage } from '../../components/playlist-page/playlist-page.component';
export const HomePage = () => {
    return(
        <>
            <Routes>
                <Route index element={<HomePreview />} />
                <Route path="/playlist/:id" element={<PlayListPage />}/>
            </Routes>
        </>
    )
}