import React from 'react'
import './App.css'
import Intro from './components/Intro/intro'
import Navbar from './components/Navbar'
import Skills from './components/Skills/skills'
import Works from './components/Works/works'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'
const App = () => {
  return (
    <div>
      <div className='App'>
       <Navbar/>
       <Intro/>
       <Skills/>
       <Works/>
       <Contact/>
       <Footer/>
      </div>
    </div>
  )
}

export default App