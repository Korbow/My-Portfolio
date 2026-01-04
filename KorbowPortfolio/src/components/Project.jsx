import React from 'react'
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useNavigate } from "react-router-dom";

const Project = () => {
  const navigate = useNavigate(); 

  return (
    <div className="h-screen ProjectSection">
      <div className="ContentProject">
        <img id="imgFrontScreen" src="..\ressources\Projects\screens\frontScreen.png"></img>
        <img id="imgCoteScreen"src="..\ressources\Projects\screens\deCote.png"></img>
        <div id="container3D" >
          

        <motion.img
        
          layoutId="project-image-unique" // L'identifiant clé
          src="/ressources/Projects/frame1TourneDisque.png"
          className="projectThumb"
          onClick={() => navigate("/project-detail")}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        />

        </div>
         
      </div>
    </div>
  )
}

export default Project