import { useState } from 'react'
import reactLogo from './assets/LOGO.png'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './pages/Home'
import Logements from './components/Logements';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/test' element={<Logements/>}/>
    </Routes>
  );
}



export default App
