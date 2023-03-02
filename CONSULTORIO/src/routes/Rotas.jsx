import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Inicio from '../pages/Homepage'
import LoginPage from '../pages/LoginPage'


function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas