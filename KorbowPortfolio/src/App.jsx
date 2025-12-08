import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'



function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      
      <Nav />
      <Hero />
      <About />
      

    </>
  )
}

export default App
