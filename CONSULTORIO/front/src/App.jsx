import Menu from './components/navbar/Navbar'
import Home from './components/pages/Home'
import './App.css'
import Sobre from './components/pages/Sobre'

function App() {

  return (
    <div className="App">
      <Menu />
      <Home />
      <Sobre />
    </div>
  )
}

export default App
