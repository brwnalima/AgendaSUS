import { Routes, BrowserRouter, Route } from 'react-router-dom'
import FormPage from '../pages/FormPage'
import Inicio from '../pages/Homepage'
import LoginPage from '../pages/LoginPage'


function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin" element={<FormPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas