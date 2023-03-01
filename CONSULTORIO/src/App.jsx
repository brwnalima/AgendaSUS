import Menu from './components/navbar/Navbar'
import Home from './components/pages/Home'
import './App.css'
import Sobre from './components/pages/Sobre'
import Help from './components/pages/Help'

function App() {

  return (
    <div className="App">
      <Menu />
      <Home />
      <Sobre />
      <Help />
    </div>
  )
}

export default App
