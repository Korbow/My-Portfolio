import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import ProjectDetail from './components/ProjectDetail';
import ScrollToTop from './components/ScrollToTop';

function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0, transition: { duration: 0.3 } }} // La page s'efface en sortant
    >
      <Nav />
      <Hero />
      <About />
      <Project />
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
    
      <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/project-detail" element={<ProjectDetail />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;