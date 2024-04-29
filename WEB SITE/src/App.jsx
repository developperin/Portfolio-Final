import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import SkillPage from './components/SkillPage'

function App() {

  return (
    <>
      <Navbar/>
      <HomePage />
      <SkillPage />
    </>
  )
}

export default App
