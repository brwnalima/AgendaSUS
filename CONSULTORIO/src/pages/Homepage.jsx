import Navbar from '../components/navbar/Navbar'
import Home from './grids/Home'
import Sobre from './grids/Sobre'
import Help from './grids/Help'
import FourthGrid from './grids/FourthGrid'
import FifthGrid from './grids/FifthGrid'

function Inicio() {
    return (
        <>
            <Navbar />
            <Home />
            <Sobre />
            <Help />
            <FourthGrid/>
            <FifthGrid />

        </>
    );
}

export default Inicio;