import React from 'react'
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import gsap from 'gsap';
import { ScrollTrigger, DrawSVGPlugin, SplitText } from 'gsap/all';

import GradualBlur from './GradualBlur';


import { useNavigate } from "react-router-dom";

function PlantThumb() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickPlant = () => {
    navigate("/Plant", {
      state: {
        background: {
          pathname: location.pathname,
          search: location.search,
          hash: location.hash
        }
      }
    });
  };

  return (
    <>
      <div className="hoverZonePlant" onClick={handleClickPlant}></div>
      <motion.img
        layoutId="project-image-plant"
        src="/assets/ProjectSection/plante.png"
        className=""
        id="imgPlante"
        transition={{ duration: 0.6}}
        
      />
    </>
  );

}


function MyProjectsThumb() {
  const navigate = useNavigate();
  const location = useLocation();
  const controls = useAnimation();

  
  useEffect(() => {
    // Si on revient sans state background, on anime la scale en revenant à 1
    if (!location.state?.background) {
      controls.start({
        scale: 1,
        transition: {
          duration: 0.8,           
          ease: [0.43, 0.13, 0.23, 0.96]
        }
      });
    }
  }, [location, controls]);

  

  const handleClickMyProjects = async () => {


      document.getElementById("textHookMiddleScreenForLink").scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

      await new Promise(resolve => setTimeout(resolve, 300));

    // scale
      await controls.start({
        scale: 1.15,
        transition: {
          duration: 0.8,
          ease: [0.43, 0.13, 0.23, 0.96]
        }
      });


    // délai pr l animation de centrage
    setTimeout(() => {
      navigate("/MyProjects", {
        state: {
          background: {
            pathname: location.pathname,
            search: location.search,
            hash: location.hash
          }
        }
      });
    }, 600); // ajuste à la durée 
  };


  return (
    <div
      className="flex align-middle"
      id="imgFrontScreen"
      onClick={handleClickMyProjects}
    >
      <div className="relative boxScreen">
        <div className="HoverBoxScreen">
          <p className="text-center" id="textHookMiddleScreenForLink" >
            Click here to see my projects
          </p>
        </div>

        <motion.img
          layoutId="project-image-myprojects"
          src="/assets/ProjectSection/screens/frontScreen.png"
          id="CenterScreen"
          animate={controls}
          initial={{ scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
        />
      </div>
    </div>
  );
}

const Project = ({ darkMode, setDarkMode, isModal, id}) => {
  const location = useLocation();



  const BackgroundRef = useRef(null);
  const sectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {  
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: BackgroundRef.current,
          start: "top 70%",
          end: "150% 50%",
          scrub: true,

        }
      })



      tl.to(
        BackgroundRef.current,
        {
          "--botColor": 255,
          ease: "none"
        },

      );
  
    });
  
    return () => ctx.revert();
  }, []);

  
  
  return (
    
    <div ref={sectionRef} className="ProjectSection relative" >
      <div className="NaHaut" ></div>
      <div className="NANA" ref={BackgroundRef} ></div>
      <div className="NaBas" id={id}></div>
      

      <div className="ProjectSectionFlex">
        <div className="ContentProject">


          <MyProjectsThumb/>

          
          <div className="SideScreen" id="">
            <div className="relative boxScreen">
              <div className="DecaleBoxSideScreen">
                <div className="EffectDecale">
                  
                  <div className="drawerDecalScreen">
                    <img src="../assets/ProjectSection/Socials/instagram.png"></img>
                    <p>Insta</p>
                  </div>
                  <div className="drawerDecalScreen">
                    <img src="../assets/ProjectSection/Socials/discord.png"></img>
                    <p>Discord</p>
                  </div>
                  <div className="drawerDecalScreen">
                    <img src="../assets/ProjectSection/Socials/github.png"></img>
                    <p>Github</p>
                  </div>
                  <div className="drawerDecalScreen">
                    <img src="../assets/ProjectSection/Socials/tiktok.png"></img>
                    <p>Tiktok</p>
                  </div>
                  <div className="drawerDecalScreen">
                    <img src="../assets/ProjectSection/Socials/youtube.png"></img>
                    <p>Youtube</p>
                  </div>
                  <div className="drawerDecalScreen">
                    <img src="../assets/ProjectSection/Socials/x.png"></img>
                    <p>X</p>
                  </div>
                </div>
                
              </div>
              <img id="imgCoteScreen" src="/assets/ProjectSection/screens/deCote.png"></img>
            </div>
          </div>
          <div className="imgPlanteSpace">
            <div className="relative">
              
              <PlantThumb />
            </div>
          </div>

          <div id="imgCup">
            <img src="/assets/ProjectSection/cup.png"></img>
            <p className="">A coffee ?</p>
          </div>
          <div id="container3D">
            

          <Link 
              to="/project-detail" 
              // CORRECTION ICI : On crée un objet simple au lieu de passer 'location' direct
              state={{ 
                background: {
                  pathname: location.pathname,
                  search: location.search,
                  hash: location.hash
                }
              }}
            >
              <motion.img
                layoutId="project-image-unique"
                src="/assets/ProjectSection/frameTourneDisque0001.png"
                className="projectThumb cursor-pointer"
                transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
              />
            </Link>

          </div>
          
        </div>
      </div>
      {!isModal && ( <GradualBlur
        target="page"
        position="bottom"
        height="7rem"
        strength={1}
        divCount={5}
        curve="bezier"
        exponential
        opacity={1}
        animated="scroll"

        observeRef={sectionRef} 
      />)}
    </div>
  )
}

export default Project