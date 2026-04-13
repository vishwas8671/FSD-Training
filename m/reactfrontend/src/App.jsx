import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './component/Main'
import Login from './component/Login'
import Registration from './component/Registration'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  

  return (
    <>
      <BrowserRouter>
      <Routes>
   <Route path='/' element={<Main/>} />
   <Route path='/login' element={<Login/>} />
   <Route path='/register' element={<Registration />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
