import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'



function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      
      <Nav />
      <Hero />

      <About />
      <Project />

    </>
  )
}

export default App