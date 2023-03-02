import Menu from './components/navbar/Navbar'
import Home from './components/pages/Home'
import './App.css'
import Sobre from './components/pages/Sobre'
import Help from './components/pages/Help'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import FourthGrid from './components/pages/FourthGrid'

function App() {

  return (
    <div className="App">
      <Menu />
      <Home />
      <Sobre />
      <Help />
      <FourthGrid />
    </div>
  )
}

export default App
