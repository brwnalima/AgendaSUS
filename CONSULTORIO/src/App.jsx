import Menu from './components/navbar/Navbar'
import Home from './components/pages/Home'
import Sobre from './components/pages/Sobre'
import './App.css'

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
