import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'



function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      
      <Nav />
      <Hero />
      <div className="h-screen bg-black">

      </div>
    </>
  )
}

export default App
