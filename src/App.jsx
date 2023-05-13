import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layouts/Layout'

function App() {

  return (
    <BrowserRouter>
      <Routes>

       <Route exact path="/" element={<Layout/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
