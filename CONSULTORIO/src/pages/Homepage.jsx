import Navbar from '../components/navbar/Navbar'
import Home from '../components/Home'
import Sobre from '../components/Sobre'
import Help from '../components/Help'
import FourthGrid from '../components/FourthGrid'

function Inicio() {
    return (
        <>
            <Navbar />
            <Home />
            <Sobre />
            <Help />
            <FourthGrid/>

        </>
    );
}

export default Inicio;