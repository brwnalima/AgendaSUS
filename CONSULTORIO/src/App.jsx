import Menu from './components/navbar/Navbar'
import Home from './components/pages/Home'
import './App.css'
import Sobre from './components/pages/Sobre'
import Help from './components/pages/Help'
import FourthGrid from './components/pages/FourthGrid'
import FifthGrid from './components/pages/FifthGrid'

function App() {

  return (
    <div className="App">
      <Menu />
      <Home />
      <Sobre />
      <Help />
      <FourthGrid />
      <FifthGrid />
    </div>
  )
}

export default App
