import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import gsap from 'gsap';


import BodyProjectGallery from "./BodyProjectGallery";
import "../style/MyProjects.css";





const MyProjects = ({ isModal, setDarkMode, darkMode }) => {
    useEffect(() => {
        gsap.fromTo(
            ".attendre",
            { opacity: 0 },
            { 
              opacity: 1,
              duration: 0.8,
              delay: 1.8   
            }
          );

        if (isModal) {
          document.body.style.overflow = "hidden";
          return () => { document.body.style.overflow = "auto"; };
        }
      }, [isModal]);
      
      
    return(
        <>
            <motion.div 
                className="fixed inset-0 z-50 flex items-center justify-center " // Centré
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                
                <motion.div className=" relative bg-black w-full h-full md:w100% md:h100% overflow-y-auto z-10" layoutId={isModal ? "modal-container" : undefined} >
                    
                    <div className="h-full flex items-center justify-center viewportProjects">
                        <div className="attendre h-[98.5%] w-[99%] rounded-[25px]  bg-white">

                            
                            
                            <MyProjectsContent setDarkMode={setDarkMode} darkMode={darkMode}/>
                        </div>
                    </div>
                
                </motion.div>
                <motion.img
                    layoutId="project-image-myprojects"
                    src="assets/ProjectSection/screens/frontScreen.png"
                    className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-[35%] pointer-events-none select-none z-60"
                    animate={{
                        scale: [1, 2, 2],
                        opacity: [1, 1, 0],
                        }}
                        transition={{
                        duration: 3,
                        times: [0, 0.75, 1],
                        ease: "easeInOut",
                        }}
                />
            </motion.div>
            
        </>
        );
      };
      
      export default MyProjects



const MyProjectsContent  = ({ setDarkMode }) => {
    
    const navigate = useNavigate();
    
    const LightDarkSwitchReceiver = useRef(null);
    const handleClickDarkMode = () => {
        if (LightDarkSwitchReceiver.current.classList.contains("DarkMode")){

        }
        else{
        LightDarkSwitchReceiver.current.classList.toggle('DarkMode')
        LightDarkSwitchReceiver.current.classList.toggle('LightMode')
        
        setDarkMode(prev => !prev);

        }
        
    };
    
    const handleClickLightMode = () => {
        if (LightDarkSwitchReceiver.current.classList.contains("LightMode")){

        }
        else{
            LightDarkSwitchReceiver.current.classList.toggle('DarkMode')
            LightDarkSwitchReceiver.current.classList.toggle('LightMode')

            setDarkMode(prev => !prev);

            
        }
    };


    useEffect(() => {
        
    }, []);
    
    return (
        <div className="contentProjectGallery rounded-[25px] LightMode" ref={LightDarkSwitchReceiver}> 
            <section className="HeadProjectGallery relative">
                <button
                    className="absolute top-4 right-4 z-50 p-2 closeGallery rounded-full"
                    onClick={() => {
                        navigate("/", { replace: true }); 
                      }}
                    >
                    <svg viewBox="0 0 32 32" height="50" width="50" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5  c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4  C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"/>
                    </svg>
                </button>
                <div className="NavGalleryContainer flex flex-col">
                    <div className="flex flex-row navGallery items-center ">
                        

                        <h1>Project Gallery:</h1>
                        <div className="DarkLightMode flex flex-row justify-center">
                            <button className="Dark" onClick={handleClickDarkMode}>
                            <svg fill="#FFFFFF" width="20px" height="20px" viewBox="0 0 35 35" data-name="Layer 2" id="Layer_2" xmlns="http://www.w3.org/2000/svg"><path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z"/></svg>
                                <div className="text">
                                    Dark
                                </div>
                                
                            </button>
                            <button className="Light" onClick={handleClickLightMode}>
                            <svg fill="#000000" width="30px" height="30px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">

                                <rect x="15" y="2" width="2" height="5"/>
                                <rect x="21.6675" y="6.8536" width="4.958" height="1.9998" transform="translate(1.5191 19.3744) rotate(-45)"/>
                                <rect x="25" y="15" width="5" height="2"/>
                                <rect x="23.1466" y="21.6675" width="1.9998" height="4.958" transform="translate(-10.0018 24.1465) rotate(-45)"/>
                                <rect x="15" y="25" width="2" height="5"/>
                                <rect x="5.3745" y="23.1466" width="4.958" height="1.9998" transform="translate(-14.7739 12.6256) rotate(-45)"/>
                                <rect x="2" y="15" width="5" height="2"/>
                                <rect x="6.8536" y="5.3745" width="1.9998" height="4.958" transform="translate(-3.253 7.8535) rotate(-45)"/>
                                <path d="M16,12a4,4,0,1,1-4,4,4.0045,4.0045,0,0,1,4-4m0-2a6,6,0,1,0,6,6,6,6,0,0,0-6-6Z"/>
                                <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" className="cls-1" width="32" height="32"/>
                                </svg>
                                <div className="text">
                                    Light
                                </div>
                            </button>
                        </div>

                    </div>
                    
                </div>
            </section>

            {/* Contenu du Body de cette modal ds un autre composant */}
            <BodyProjectGallery />

            
        </div>
      )};
          