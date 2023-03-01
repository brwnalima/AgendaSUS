import Menu from './components/navbar/Navbar'
import Home from './components/pages/Home'
import './App.css'
import Sobre from './components/pages/Sobre'
import Login from './components/login/login'

function App() {

  return (
    <div className="App">
      <Menu/>
      <Login/>
      
    </div>
  )
}

export default App
