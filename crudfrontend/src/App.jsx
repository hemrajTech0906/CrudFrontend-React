import { useState } from 'react'

import './App.css'
import Create from './components/Create'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Read from './components/Read'
import Update from './components/Update'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  

  return (
    <>
    <BrowserRouter>
    <ToastContainer />
    <Routes>
    
      <Route exact path='/' element={<Create/>} />
      <Route path='/read' element={<Read/>} />
      <Route path='/update' element={<Update/>} />
    </Routes>
    
    
    </BrowserRouter>
      
    </>
  )
}

export default App
