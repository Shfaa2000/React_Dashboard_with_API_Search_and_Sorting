import React from 'react'
import HomePage from "./pages/Home"
import Details from './pages/Details'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className=''>
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
    </div>
  )
}

export default App