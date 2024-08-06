import React from 'react'
import './App.css'
import Intro from './components/Intro/intro'
import Navbar from './components/Navbar'
import Skills from './components/Skills/skills'
import Works from './components/Works/works'
const App = () => {
  return (
    <div>
      <div className='App'>
       <Navbar/>
       <Intro/>
       <Skills/>
       <Works/>
      </div>
    </div>
  )
}

export default App