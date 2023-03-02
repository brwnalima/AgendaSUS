import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Inicio from '../pages/Inicio'


function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas