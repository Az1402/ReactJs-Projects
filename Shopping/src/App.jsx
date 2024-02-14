import Home from './Pages/Home'
import Cart from './Pages/Cart'
import {  Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar'


function App() {
  

  return (
    <div>
      <div>
        <Navbar/>

      </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>

      </Routes>
      
    </div>
  )
}

export default App
