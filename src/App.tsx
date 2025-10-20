import { Link, Outlet } from 'react-router'
import './App.css'

function App() {
  return (
    <>
      <div>   
      <h1>Test React PUP Lublin</h1>  
        <Link to="/">Home</Link>
        <p> </p>
        <Link to="/about">About</Link>
        <p></p>
        <Outlet />    
      </div>     
    </>
  )
}

export default App
