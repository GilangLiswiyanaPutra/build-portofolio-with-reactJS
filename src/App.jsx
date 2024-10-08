import React from 'react'
import Navbar from './components/layout/navbar.jsx'
import Home from './components/pages/home.jsx'
import About from './components/pages/about.jsx'
import Project from './components/pages/project.jsx'
import Skill from './components/pages/skill.jsx'
import Footer from './components/layout/footer.jsx'


const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Home />
      <About />
      <Project />
      <Skill />
      <Footer />
    </>
  )
}

export default App