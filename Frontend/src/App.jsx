import { useEffect, useState } from 'react'
import Login from './Pages/LogIn/Login'
import './App.css'
import SignUp from './Pages/SignUp/SignUp'
import Home from './Pages/Home/Home'

function App() {
  
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* <Login/> */}
      {/* <SignUp/> */}
      <Home/>
    </div>
  )
}

export default App
