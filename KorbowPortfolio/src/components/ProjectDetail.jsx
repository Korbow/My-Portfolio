import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom"
import { tracks } from "../datas/tracks.js";
import AudioPlayerHub from './AudioPlayerHub.jsx'
import { useAudio } from "./AudioContext";

// Toutes les frames
const frames = [
  "/assets/TourneDisque/frameTourneDisque0001.png",
  "/assets/TourneDisque/frameTourneDisque0002.png",
  "/assets/TourneDisque/frameTourneDisque0003.png",
  "/assets/TourneDisque/frameTourneDisque0004.png",
  "/assets/TourneDisque/frameTourneDisque0005.png",
  "/assets/TourneDisque/frameTourneDisque0006.png",
  "/assets/TourneDisque/frameTourneDisque0007.png",
  "/assets/TourneDisque/frameTourneDisque0008.png",
  "/assets/TourneDisque/frameTourneDisque0009.png",
  "/assets/TourneDisque/frameTourneDisque0010.png",
  "/assets/TourneDisque/frameTourneDisque0011.png",
  "/assets/TourneDisque/frameTourneDisque0012.png",
  "/assets/TourneDisque/frameTourneDisque0013.png",
  "/assets/TourneDisque/frameTourneDisque0014.png",
  "/assets/TourneDisque/frameTourneDisque0015.png",
  "/assets/TourneDisque/frameTourneDisque0016.png",
  "/assets/TourneDisque/frameTourneDisque0017.png",
  "/assets/TourneDisque/frameTourneDisque0018.png",
  "/assets/TourneDisque/frameTourneDisque0019.png",
  "/assets/TourneDisque/frameTourneDisque0020.png",
  "/assets/TourneDisque/frameTourneDisque0021.png",
  "/assets/TourneDisque/frameTourneDisque0022.png",
  "/assets/TourneDisque/frameTourneDisque0023.png",
  "/assets/TourneDisque/frameTourneDisque0024.png",
  "/assets/TourneDisque/frameTourneDisque0025.png",
  "/assets/TourneDisque/frameTourneDisque0026.png",
  "/assets/TourneDisque/frameTourneDisque0027.png",
  "/assets/TourneDisque/frameTourneDisque0028.png",
  "/assets/TourneDisque/frameTourneDisque0029.png",
  "/assets/TourneDisque/frameTourneDisque0030.png",
  "/assets/TourneDisque/frameTourneDisque0031.png"
];


const ProjectDetail = ({ isModal }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const { audioUnlocked } = useAudio();

  


  const dropzoneRef = useRef(null);
  const draggedEl = useRef(null);
  const audioRef = useRef(null);
  const dragGhost = useRef(null);

  const offset = useRef({ x: 0, y: 0 });
  const [currentVinyl, setCurrentVinyl] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);

  const [currentTitle, setCurrentTitle] = useState(null);
  const [currentArtist, setCurrentArtist] = useState(null);


  // Bloque le scroll 
  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = "auto"; };
    }
  }, [isModal]);

  //  Logique d'animation des frames
  useEffect(() => {

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentFrame((prev) => {
          if (prev < frames.length - 1) return prev + 1;
          clearInterval(interval); 
          return prev;
        });
      }, 40); 
    }, 100); 

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleMouseDown = (e) => {
      const target = e.target.closest(".draggable");
      if (!target) return;
    
      e.preventDefault();
    
      draggedEl.current = target.dataset.id;
      
      const rect = target.getBoundingClientRect();
    
      const ghost = target.cloneNode(true);
      ghost.style.position = "fixed";
      ghost.style.top = `${rect.top}px`;
      ghost.style.left = `${rect.left}px`;
      ghost.style.width = `${rect.width}px`;
      ghost.style.height = `${rect.height}px`;
      ghost.style.pointerEvents = "none";
      ghost.style.zIndex = 1000;
    
      document.body.appendChild(ghost);
      dragGhost.current = ghost;
    
      offset.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };


  
    const handleMouseMove = (e) => {
      if (!dragGhost.current) return;
    
      dragGhost.current.style.left = `${e.clientX - offset.current.x}px`;
      dragGhost.current.style.top = `${e.clientY - offset.current.y}px`;
    };
  
    const handleMouseUp = () => {
      if (!dragGhost.current) return;
    
      const dragRect = dragGhost.current.getBoundingClientRect();
      const dropRect = dropzoneRef.current.getBoundingClientRect();
    
      const isInside =
        dragRect.left < dropRect.right &&
        dragRect.right > dropRect.left &&
        dragRect.top < dropRect.bottom &&
        dragRect.bottom > dropRect.top;
    
      if (isInside) {
        handleDrop(draggedEl.current);
      }
    
      dragGhost.current.remove();
      dragGhost.current = null;
    };

    const handleDrop = (trackId) => {
      const track = tracks[trackId];
      if (!track) return;
    
      setCurrentVinyl(track.vinylImage);
      if (audioUnlocked) {
        setCurrentTrack(track); // passe au composant SoundCloud
      }
      setCurrentTitle(track.title);
      setCurrentArtist(track.artist);

    };
  
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  
  
  

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center " // Centré
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Fond sombre  */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />


      <motion.div 
        className="relative bg-white w-full h-full md:w100% md:h100% overflow-y-auto z-10"
        layoutId={isModal ? "modal-container" : undefined} 
      >
        {/* btn fermer */}
        <Link to="/" className="fixed top-4 right-4 z-50 p-2  rounded-full">
        <svg viewBox="0 0 32 32" height="50" width="50" fill="#000000" stroke="#FFFFFF" strokeWidth="0.8" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5  c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4  C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"/>
        </svg>
        </Link>

        <div className="containerCoolMusic">
          <div className="containerSonsFlex">
            <h1 className="containerSonsFlexH1">
              Great Music:
            </h1>
            <p className="containerSonsFlexP" >- Select a cover a drag it into the vinyle to start playing the track</p>
            <div className="containerSons">
              <div className="Slider">
                {Object.values(tracks).map((track, index) => (
                  <div
                    key={track.id}
                    className="draggable"
                    data-id={track.id}
                    style={{ "--i": index }}
                  >
                <img src={track.cover} alt={track.title} />
                </div>
                ))}
              </div>
            </div>
          
        </div>
        
        


      {currentVinyl && (
        <div className="InfoSon">
            <p>Currently Playing <span className="highlightElement"> {currentTitle} </span> from <span className="highlightArtist">{currentArtist} </span></p>
        </div>
        )}


          <div
            ref={dropzoneRef}
            className="vinyle-dropzone"
          >

          </div>

          <div className="VinyleSpace">
            


            {/* mouvant du vinyle */}
            <motion.img
              layoutId="project-image-unique"
              src={frames[currentFrame]}
              className="vinyleTourneDisque ml-auto"
              transition={{ duration: 1, type: "spring", bounce: 0.2 }}
            />
            {currentVinyl && (
                <div className="Vinyle">
                  <motion.img
                    src={currentVinyl}
                    className=""
                    animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 10 
                      }}
                    
                  />
                </div>
              )}
          </div>


        </div>

        <div className="reseauOverlay">
          {currentTrack && audioUnlocked && (
            <AudioPlayerHub
              track={currentTrack}
              autoPlay={audioUnlocked}
            />
          )}
          </div>

        

      </motion.div>
      
    </motion.div>
  );
};

export default ProjectDetail;