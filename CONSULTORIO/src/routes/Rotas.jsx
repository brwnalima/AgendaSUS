import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Help from '../components/Help'

import Sobre from '../components/Sobre'
import LoginPage from '../pages/LoginPage'
import FifthGrid from '../pages/FifthGrid'

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={  } />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/#sobre" element={<Sobre />} />
                <Route path="/#help" element={<Help />} />
                <Route path="/#contato" element={<FifthGrid />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas