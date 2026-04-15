import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import { AudioProvider } from "./components/AudioContext";


import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import ProjectDetail from './components/ProjectDetail';
import Plant from './components/Plant';
import Pricing from './components/Pricing';
import ScrollToTop from './components/ScrollToTop';
import MyProjects from './components/MyProjects';

// Home composant de App, qui peut etre affiché ou une autre route de modal

function Home({ darkMode, setDarkMode, isModal }) {
  const location = useLocation();

  // Pr les transition de location
  
useEffect(() => {
  const id = location.state?.scrollTo;
  if (!id) return;

  let attempts = 0;

  const interval = setInterval(() => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      clearInterval(interval);
    }

    attempts++;
    if (attempts > 30) clearInterval(interval);
  }, 50);

  return () => clearInterval(interval);
}, [location]);
  return (
    
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0, transition: { duration: 0.3 } }} // La page s'efface en sortant
      >
        <Nav darkMode={darkMode} />
        <Hero id="hero"/>
        <About id="skills"/>
        <Project setDarkMode={setDarkMode} isModal={isModal} id="projects"/>
        <Pricing id="pricing"/>

      </motion.div>

  );
}

function App() {
  //Logique DarkMode Partagée
  const [darkMode, setDarkMode] = useState(false);

  const location = useLocation();

  const state = location.state;
  const background = state && state.background;
  const [audioUnlocked, setAudioUnlocked] = useState(false);


  useEffect(() => {

    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {

      document.body.style.overflow = "hidden";
    }, 1200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "hidden";
    };
  }, []);

    // Logique de bypass audio
  useEffect(() => {
    if (audioUnlocked) return;

    const unlockAudio = () => {
      setAudioUnlocked(true);
      document.removeEventListener("click", unlockAudio);
    };

    document.addEventListener("click", unlockAudio);

    return () => {
      document.removeEventListener("click", unlockAudio);
    };
  }, [audioUnlocked]);
  

  return (
    <>
      <AudioProvider>
        <ScrollToTop /> 
        {/*Route sans background*/}
      
        <Routes location={background || location}>
          <Route path="/" element={<Home 
              darkMode={darkMode} 
              setDarkMode={setDarkMode}
              isModal={!!background} 
            />} />
          <Route path="/project-detail" element={<ProjectDetail />} />
          <Route path="/plant" element={<Plant isModal={true} />} />
              <Route path="/myProjects" element={<MyProjects darkMode={darkMode} setDarkMode={setDarkMode} isModal={true} />} />

        </Routes>

        <AnimatePresence>
          {/*Route background (avk les modals)*/}
          {background && (
            <Routes>
              <Route path="/project-detail" element={<ProjectDetail isModal={true} />} />
              <Route path="/plant" element={<Plant isModal={true} />} />
              <Route path="/myProjects" element={<MyProjects darkMode={darkMode} setDarkMode={setDarkMode} isModal={true} />} />
            </Routes>
          )}
        </AnimatePresence>
      </AudioProvider>
    </>
  );
}

export default App;