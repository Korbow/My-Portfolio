import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom"

import SplitText from "./SplitText";


const Plant = ({ isModal }) => {
    useEffect(() => {
        if (isModal) {
          document.body.style.overflow = "hidden";
          return () => { document.body.style.overflow = "auto"; };
        }
      }, [isModal]);
      
    return(
      <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center " // Centré
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0  backdrop-blur-sm " />
            <motion.div 
              className="relative backgroundPlant w-full h-full md:w100% md:h100% overflow-y-auto z-10"
              layoutId={isModal ? "modal-container" : undefined} 
            >
              {/* btn fermer */}
              <Link to="/" className="absolute top-4 right-4 z-50 p-2  rounded-full">
                <svg viewBox="0 0 32 32" height="50" width="50" fill="#357135" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5  c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4  C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"/>
                </svg>
              </Link>
              
              <div className="h-full">
                <div className="TitlePlantUpcoming">
                  <h2>
                    <SplitText
                      text="Upcoming"
                      className=""
                      delay={80}
                      duration={1.25}
                      ease="power3.out"
                      splitType="chars"
                      from={{ opacity: 0, y: 50 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="-100px"
                      textAlign="center"
                      
                      showCallback
                    />
                  </h2>
                </div>
                <div className="PlantSpaceCircle">
                  <div className="PlantSpace">
                    <motion.img
                      layoutId="project-image-plant"
                      src="/assets/ProjectSection/plante.png"
                      className="PlantImg"
                      transition={{ duration: 0.6,  ease: [0.4, 0.5, 0.5, 1]}}
                    />
                </div>
              </div>

              </div>
            </motion.div>

          </motion.div>
        );
      };
      
      export default Plant;