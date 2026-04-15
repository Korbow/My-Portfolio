import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom"
import gsap from 'gsap';
import { motion, AnimatePresence } from "framer-motion";

import SplitText from "./SplitText";

// Import de tes composants détail
function HoverSlideshow() {
    const images = [
      "/assets/assetsProjectGallery/GregWebsite/GregClipsAcceuil.png",
      "/assets/assetsProjectGallery/GregWebsite/GregClips.png",
      "/assets/assetsProjectGallery/GregWebsite/GregClipsReseaux.png"
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 2000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <img
        src={images[currentIndex]}
        className="w-[88%]"
        alt=""
      />
    );
  }

  // Chaque composant détail au click depuis la galerie

  function Project1Detail({ onBack }) {
    useEffect(() => {
    }, []);
  
    return (
      <>
        <div className="Description rounded-[15px] ProjectDetailCiteMaudite relative">
            <div className="CloseDetail">
              <button className="fontBeausite" onClick={onBack}>
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
                <path d="M6 12H18M18 12L13 7M18 12L13 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
                <div className="text">
                    Back to Gallery
                </div>
              </button>
            </div>

            <div className="DescriptionTitleSpace">
              <h2 className="fontBeausite DescriptionTitle">
                  CMFR: Cité Maudite
              </h2>
            </div>
            <div className="FirstPart flex flex-row items-center justify-center">
              <video
                  className="hover-video rounded-[15px] w-[88%]"
                  autoPlay
                  muted
                  src="/assets/assetsProjectGallery/CMFRCiteMaudite/CMFRVid.mp4"
                  type="video/mp4"
                  loop
                  >
              </video>
              <div className="FirstPartLabel">
                <p> 
                  A site made for an event named "Cité Maudite" by Communauté Minecraft Francaise
                  <br/><br/>
                  The website displays a presentation of the event and of the team, links to the socials and also the quest for the player. 
                </p>

                <h6>Made with HTML CSS and Vanilla JS</h6>
              </div>
            </div>
            
        </div>
      </>
    );
  }

  function Project2Detail({ onBack }) {
    useEffect(() => {
    }, []);
  
    return (
      <>
        <div className="Description rounded-[15px] ProjectDetailCiteMaudite relative">
            <div className="CloseDetail">
              <button className="fontBeausite" onClick={onBack}>
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
                <path d="M6 12H18M18 12L13 7M18 12L13 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
                <div className="text">
                    Back to Gallery
                </div>
              </button>
            </div>

            <div className="DescriptionTitleSpace">
              <h2 className="fontBeausite DescriptionTitle">
                  TicTacToe Web
              </h2>
            </div>
            <div className="FirstPart flex flex-col items-center ">

            

              <video
                  className="hover-video rounded-[15px] w-[88%]"
                  autoPlay
                  muted
                  src="/assets/assetsProjectGallery/TicTacToeWeb/TicTacToeVidCrop.mp4"
                  type="video/mp4"
                  loop
                  >
              </video>

              <div className="FirstPartLabel p-12">
                <p> 
                  A Tic-tac-toe game made with JS, HTML and CSS
                </p>

              </div>
              
            </div>
            
        </div>
      </>
    );
  }

  function Project3Detail({ onBack }) {

    const images = [
      "/assets/assetsProjectGallery/AxolotGame/axolotCharacter.png",
      "/assets/assetsProjectGallery/AxolotGame/ForestAngle.png",
      "/assets/assetsProjectGallery/AxolotGame/OnOcean.png"
    ];
    
    const Carousel = () => {
      const [positions, setPositions] = useState(["left", "center", "right"]);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setPositions(prev => {
            const newPos = [...prev];
            newPos.unshift(newPos.pop());
            return newPos;
          });
        }, 3000);
    
        return () => clearInterval(interval);
      }, []);
    
      return (
        <div className="carousel">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`slide ${positions[idx]}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      );
    };



  
    return (
      <>
        <div className="Description rounded-[15px] ProjectDetailCiteMaudite relative">
            <div className="CloseDetail">
              <button className="fontBeausite" onClick={onBack}>
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
                <path d="M6 12H18M18 12L13 7M18 12L13 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
                <div className="text">
                    Back to Gallery
                </div>
              </button>
            </div>

            <div className="DescriptionTitleSpace">
              <h2 className="fontBeausite DescriptionTitle">
                3D on Unreal Engine
              </h2>
            </div>
            <div className="FirstPart flex flex-row items-center justify-center">
              <video
                  className="hover-video rounded-[15px] w-[88%]"
                  autoPlay
                  muted
                  src="/assets/assetsProjectGallery/AxolotGame/AxolotGame.mp4"
                  type="video/mp4"
                  loop
                  >
              </video>
              <div className="FirstPartLabel">
                <p> 
                  Small game made for fun on a 3d game Engine
                  <br/><br/>
                  Works on 3D rendering, modeling, rigging & animation, blueprint visual scripting, texturing, materials and physics simulation
                </p>

                <h6>Made in Unreal Engine 4</h6>
              </div>
            </div>

            <div className="SecondPart pt-5 flex flex-col items-center ">
              <div className="h-[420px]">
                <Carousel />
              </div>

              Made in 2023
            </div>
        </div>
      </>
    );
  }

  
  function Project4Detail({ onBack }) {
    useEffect(() => {
    }, []);
  
    return (
      <>
        <div className="Description rounded-[15px] GregClips relative">
            <div className="CloseDetail">
              <button className="fontBeausite" onClick={onBack}>
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
                <path d="M6 12H18M18 12L13 7M18 12L13 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
                <div className="text">
                    Back to Gallery
                </div>
              </button>
            </div>

            <div className="DescriptionTitleSpace">
              <h2 className="fontBeausite DescriptionTitle">
                  GregClips
              </h2>
            </div>
            <div className="FirstPart flex flex-row items-center justify-center">
                  <img
                      className="imgDesc"
                      src="/assets/assetsProjectGallery/GregWebsite/GregClipsAcceuil.png"
                      >
                  </img>

                  <img
                      className="imgDesc"
                      src="/assets/assetsProjectGallery/GregWebsite/GregClips.png"
                      >
                  </img>
            </div>

            <div className="SecondPart flex flex-row items-center justify-center">
                  <img
                      className="imgDesc"
                      src="/assets/assetsProjectGallery/GregWebsite/GregClipsReseaux.png"
                      >
                  </img>

                  <div className="SecondPartLabel p-12">

                    <p> 
                      Canvas of a Website made for fun.
                      <br/>
                      Containing Home, About and Socials page.
                    </p>

                    <h6>Made w/ HTML CSS and Vanilla JS</h6>

                  </div>
            </div>
            
        </div>
      </>
    );
  }

  function Project6Detail({ onBack }) {

    const ClickNavigateSveltNote = () => {
      window.open("https://korbow.github.io/SveltNote/", "_blank");
    };
    const ClickNavigateGithubSveltNote = () => {
      window.open("https://github.com/Korbow/SveltNote", "_blank");
    };

    

    useEffect(() => {
    }, []);
  
    return (
      <>
        <div className="Description rounded-[15px] SveltNote relative">
            <div className="CloseDetail">
              <button className="fontBeausite" onClick={onBack}>
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
                <path d="M6 12H18M18 12L13 7M18 12L13 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
                <div className="text">
                    Back to Gallery
                </div>
              </button>
            </div>

            <div className="DescriptionTitleSpace">
              <h2 className="fontBeausite DescriptionTitle">
                SvelNote
              </h2>
            </div>
            <div className="FirstPart flex flex-row items-center justify-center">
              <img
                className="imgDesc"
                src="/assets/assetsProjectGallery/SveltNote/SveltNoteCoverDetail.png"
              >
              </img>
            </div>

            <div className="SecondPart flex flex-col items-center justify-center">
                  

                  <div className="SecondPartLabel">

                    <p> 
                    Its purpose is to showcase a clean landing page and a small shop section, with smooth animations and a modern UI.
                    <br></br><br></br>
                    The project is not meant to be a real product — it’s just a demonstration of design, animations, and front-end development skills.
                    </p>

                    <h6>Made with React and GSAP</h6>

                    <div className="CTA-car flex flex-row items-center justify-center">
                      <button className="buttonLive flex flex-row items-center justify-center" onClick={ClickNavigateSveltNote}>
                        <label>View it live</label>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
                          <g id="Arrow / Arrow_Right_SM">
                          <path id="Vector" d="M7 12H17M17 12L13 8M17 12L13 16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                        </svg>
                      </button>
                      <button className="button x" onClick={ClickNavigateGithubSveltNote}>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <title>github</title>
                            <rect width="24" height="24" fill="none"></rect>
                            <path
                              d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"
                            ></path>
                          </g>
                        </svg>
                        Github Repo
                      </button>
                    </div>

                  </div>

                  <div className=" ThirdPartFlexRow flex flex-row items-center justify-center">
                    <video
                      className="hover-video rounded-[15px] w-[88%]"
                      autoPlay
                      muted
                      src="/assets/assetsProjectGallery/SveltNote/Part1SveltNote.mp4"
                      type="video/mp4"
                      loop
                      >
                    </video>
                    
                    <video
                      className="hover-video rounded-[15px] w-[88%]"
                      autoPlay
                      muted
                      src="/assets/assetsProjectGallery/SveltNote/Part2SveltNote.mp4"
                      type="video/mp4"
                      loop
                      >
                    </video>
                  </div>
            </div>
            
        </div>
      </>
    );
  }


  function Project7Detail({ onBack }) {
    const ClickNavigateGithubGraffitiKore = () => {
      window.open("https://github.com/Korbow/GraffitiKore", "_blank");
    };
    useEffect(() => {
    }, []);
  
    return (
      <>
        <div className="Description rounded-[15px] GraffitiKore relative">
            <div className="CloseDetail">
              <button className="fontBeausite" onClick={onBack}>
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
                <path d="M6 12H18M18 12L13 7M18 12L13 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
                <div className="text">
                    Back to Gallery
                </div>
              </button>
            </div>

            <div className="DescriptionTitleSpace">
              <h2 className="fontBeausite DescriptionTitle">
                Plugin GraffitiKore
              </h2>
            </div>
            <div className="FirstPart flex flex-row items-center justify-center">
              <video
                  className="hover-video rounded-[15px] w-[88%]"
                  autoPlay
                  muted
                  src="/assets/assetsProjectGallery/GraffitiKore/GraffitiKoreVidCrop.mp4"
                  type="video/mp4"
                  loop
                  >
              </video>
            </div>

            <div className="SecondPart flex flex-row items-center justify-center">
                  <img
                      className="imgDesc"
                      src="/assets/assetsProjectGallery/GraffitiKore/GraffitiKoreScreen.png"
                      >
                  </img>

                  <div className="SecondPartLabel p-12">

                    <p> 
                      Works on a way to make graffitis in minecraft by using a plugin and a resource pack.
                      <br/><br/>
                      These graffitis are made with CustomModelData, custom models and custom textures.
                    </p>

                    <h6>Made in Java (Spigot) </h6>

                    <div className="CTA-car flex flex-row items-center justify-center">
                      <button className="button x" onClick={ClickNavigateGithubGraffitiKore}>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <title>github</title>
                            <rect width="24" height="24" fill="none"></rect>
                            <path
                              d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"
                            ></path>
                          </g>
                        </svg>
                        Github Repo
                      </button>
                    </div>

                  </div>
            </div>
            
        </div>
      </>
    );
  }

  function Project8Detail({ onBack }) {

    const ClickNavigateMinesweeperWeb = () => {
      window.open("https://korbow.github.io/Minesweeper_Web/index.html", "_blank");
    };
    const ClickNavigateGithubMinesweeperWeb = () => {
      window.open("https://github.com/Korbow/Minesweeper_Web", "_blank");
    };


    useEffect(() => {
    }, []);
  
    return (
      <>
        <div className="Description rounded-[15px] ProjectDetailCiteMaudite relative">
            <div className="CloseDetail">
              <button className="fontBeausite" onClick={onBack}>
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
                <path d="M6 12H18M18 12L13 7M18 12L13 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
                <div className="text">
                    Back to Gallery
                </div>
              </button>
            </div>

            <div className="DescriptionTitleSpace">
              <h2 className="fontBeausite DescriptionTitle">
                Minesweeper Web
              </h2>
            </div>
            <div className="FirstPart flex flex-row items-center justify-center">
              <video
                  className="hover-video rounded-[15px] w-[88%]"
                  autoPlay
                  muted
                  src="/assets/assetsProjectGallery/MinesweeperWeb/MinesweeperWeb.mp4"
                  type="video/mp4"
                  loop
                  >
              </video>
              <div className="FirstPartLabel">
                <p> 
                  A Playable Minesweeper game.<br></br> It includes a complete game system, sound control, multiple difficulty levels, winning and losing modals, a timer, and a scoring system.
                </p>

                <h6>Made in HTML, CSS and vanilla JS</h6>

                <div className="CTA-car flex flex-row items-center justify-center">
                  <button className="buttonLive flex flex-row items-center justify-center" onClick={ClickNavigateMinesweeperWeb}>
                    <label>View it live</label>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
                      <g id="Arrow / Arrow_Right_SM">
                      <path id="Vector" d="M7 12H17M17 12L13 8M17 12L13 16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                    </svg>
                  </button>
                  <button className="button x" onClick={ClickNavigateGithubMinesweeperWeb}>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>github</title>
                        <rect width="24" height="24" fill="none"></rect>
                        <path
                          d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"
                        ></path>
                      </g>
                    </svg>
                    Github Repo
                  </button>
                </div>
              </div>
            </div>  
        </div>
      </>
    );
  }

const BodyProjectGallery = () => {
    const [activeProject, setActiveProject] = useState(0);
    const [animationKey, setAnimationKey] = useState(0);
    const [hovered, setHovered] = useState(false);


    const handleBack = () => setActiveProject(0);
    const handleHover = () => {
        setHovered(true);
        setAnimationKey(prev => prev + 1); 
        };
    const handleLeave = () => {
    setHovered(false);
    };



  return (
    <section className="BodyProjectGallery">            
        <AnimatePresence>
          {activeProject === 0 && (
                <motion.section
                    key="grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="parent Grid"
                >
                        <div className="div1 relative flex items-center flex-col justify-start" onClick={() => setActiveProject(1)}>
                            <div className="m-2">
                                <h2 className="fontBeausite text-[12px] font-normal tracking-[-0.02em] leading-[100%] text-left ">
                                    CMFR SITE CITE MAUDITE
                                </h2>
                            </div>
                            <video
                                className="hover-video rounded-[15px] w-[88%]"
                                muted
                                preload="auto"
                                poster="/assets/assetsProjectGallery/CMFRCiteMaudite/CMFRVidF1.png"
                                onMouseEnter={(e) => e.currentTarget.play()}
                                onMouseLeave={(e) => {
                                    e.currentTarget.pause();
                                    e.currentTarget.currentTime = 0;
                                }}
                                >
                                <source
                                    src="/assets/assetsProjectGallery/CMFRCiteMaudite/CMFRVid.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <div className="groupedCont">
                          <div className="grouped grouped-top">
                          <div className="div2 relative flex items-center flex-col" onClick={() => setActiveProject(2)}>
                              <div className="m-2">
                                  <h2 className="fontBeausite text-[12px] font-normal tracking-[-0.02em] leading-[100%] text-left ">
                                      TICTACTOE WEB
                                  </h2>
                              </div>

                              <video
                                  className="hover-video w-[88%] h-[88%] rounded-[10px] aspect-video object-cover"
                                  muted
                                  preload="auto"
                                  poster="/assets/assetsProjectGallery/TicTacToeWeb/TicTacToeCover.png"
                                  onMouseEnter={(e) => e.currentTarget.play()}
                                  onMouseLeave={(e) => {
                                      e.currentTarget.pause();
                                      e.currentTarget.currentTime = 0;
                                  }}
                                  >
                                  <source
                                      src="/assets/assetsProjectGallery/TicTacToeWeb/TicTacToeVidCrop.mp4"
                                      type="video/mp4"
                                  />
                              </video>
                          </div>
                        
                          <div className="div3 relative flex items-center flex-col" onClick={() => setActiveProject(3)}>

                              <div className=" m-2">
                              <h2 className="fontBeausite text-[12px] font-normal tracking-[-0.02em] leading-[100%] text-left ">
                                      UNREAL ENGINE 3D GAME
                                  </h2>
                              </div>

                              <video
                                  className="hover-video rounded-[10px] w-[88%] aspect-video object-cover"
                                  muted
                                  preload="auto"
                                  poster="/assets/assetsProjectGallery/AxolotGame/AxolotGameF1.png"
                                  onMouseEnter={(e) => e.currentTarget.play()}
                                  onMouseLeave={(e) => {
                                      e.currentTarget.pause();
                                      e.currentTarget.currentTime = 0;
                                  }}
                                  >
                                  <source
                                      src="/assets/assetsProjectGallery/AxolotGame/AxolotGame.mp4"
                                      type="video/mp4"
                                  />
                              </video>
                          </div>

                          <div className="div4 relative flex items-center  flex-col" onClick={() => setActiveProject(4)}>

                              <div className=" m-2">
                                  <h2 className="fontBeausite text-[12px] font-normal tracking-[-0.02em] leading-[100%] text-left ">
                                      GREGCLIPS
                                  </h2>
                              </div>
                              
                              <HoverSlideshow/>
                          </div>

                          <div className="div5 relative group"
                              onMouseEnter={handleHover}
                              onMouseLeave={handleLeave}
                          >
                              <div className="inset-0 z-10 bgreveallock1Hover flex items-center justify-center transition-opacity duration-300  absolute pointer-events-none">
                                  
                              <SplitText
                                  key={animationKey}
                                  text="Upcoming"
                                  className="absolute textLock1"
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

                              </div>
                              <div className="inset-0 z-10 bgreveallock1 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0 group-hover:backdrop-blur-sm absolute pointer-events-none">
                                  <svg className="svgLock1" version="1.0" width="94px" height="100px" viewBox="0 0 948.000000 1280.000000" >
                                      <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" stroke="none">
                                      <path d="M4522 12739 c-1038 -46 -2010 -476 -2699 -1193 -498 -518 -810 -1145 -902 -1816 -26 -183 -31 -421 -31 -1452 l0 -1088 -420 0 -421 0 -24 -25 -25 -24 0 -3426 0 -3426 25 -24 24 -25 4659 0 4659 0 21 23 22 23 0 3428 0 3427 -25 24 -24 25 -421 0 -420 0 0 1078 c0 1063 -6 1308 -35 1499 -102 680 -408 1288 -905 1797 -318 327 -648 565 -1064 770 -475 234 -1053 382 -1566 401 -80 3 -170 7 -200 9 -30 1 -133 -1 -228 -5z m449 -1179 c561 -55 1068 -255 1474 -583 94 -75 282 -264 356 -357 245 -307 405 -687 449 -1065 6 -56 10 -515 10 -1228 l0 -1137 -2547 2 -2548 3 0 1135 c0 1250 0 1239 64 1491 202 800 886 1439 1779 1663 130 32 356 70 472 79 106 8 396 6 491 -3z"/>
                                      </g>
                                  </svg>
                              </div>
                          </div>
                          </div>
                        </div>

                        <div className="grouped grouped-middle">
                          <div className="div6 relative flex items-center flex-col" onClick={() => setActiveProject(6)}>
                            <div className="m-2">
                                <h2 className="fontBeausite text-[12px] text-white font-normal tracking-[-0.02em] leading-[100%] text-left ">
                                    SVELT NOTE
                                </h2>
                            </div>

                            <video
                                className="hover-video rounded-[10px] w-[88%] aspect-video object-cover"
                                muted
                                preload="auto"
                                poster="/assets/assetsProjectGallery/SveltNote/Part1SveltNoteF1.png"
                                onMouseEnter={(e) => e.currentTarget.play()}
                                onMouseLeave={(e) => {
                                    e.currentTarget.pause();
                                    e.currentTarget.currentTime = 0;
                                }}
                                >
                                <source
                                    src="/assets/assetsProjectGallery/SveltNote/Part1SveltNote.mp4"
                                    type="video/mp4"
                                />
                            </video>
                            <svg className="mt-2 mb-2" viewBox="0 0 100 1" xmlns="http://www.w3.org/2000/svg">
                            <line x1="25" y1="0" x2="75" y2="0" stroke="white" strokeWidth="0.5"/>

                            </svg>

                            <video
                                className=" hover-video rounded-[10px] w-[88%] aspect-video object-cover"
                                muted
                                preload="auto"
                                poster="/assets/assetsProjectGallery/SveltNote/Part2SveltNoteF1.png"
                                onMouseEnter={(e) => e.currentTarget.play()}
                                onMouseLeave={(e) => {
                                    e.currentTarget.pause();
                                    e.currentTarget.currentTime = 0;
                                }}
                                >
                                <source
                                    src="/assets/assetsProjectGallery/SveltNote/Part2SveltNote.mp4"
                                    type="video/mp4"
                                />
                            </video>
                            

                          </div>
                          <div className="div7 relative flex items-center flex-col" onClick={() => setActiveProject(7)}>
                              <div className="m-2">
                                  <h2 className="fontBeausite text-[12px] font-normal tracking-[-0.02em] leading-[100%] text-left ">
                                      PLUGIN GRAFFITIKORE
                                  </h2>
                              </div>

                              <video
                                  className="hover-video rounded-[10px] w-[88%] aspect-video object-cover"
                                  muted
                                  preload="auto"
                                  poster="/assets/assetsProjectGallery/GraffitiKore/GraffitiKoreVidF1.png"
                                  onMouseEnter={(e) => e.currentTarget.play()}
                                  onMouseLeave={(e) => {
                                      e.currentTarget.pause();
                                      e.currentTarget.currentTime = 0;
                                  }}
                                  >
                                  <source
                                      src="/assets/assetsProjectGallery/GraffitiKore/GraffitiKoreVidCrop.mp4"
                                      type="video/mp4"
                                  />
                              </video>
                          </div>
                          <div className="div8 relative flex items-center flex-col" onClick={() => setActiveProject(8)}>
                              <div className=" m-2">
                              <h2 className="fontBeausite text-[12px] font-normal tracking-[-0.02em] leading-[100%] text-left ">
                                      MINESWEEPER WEB
                                  </h2>
                              </div>

                              <video
                                  className="hover-video rounded-[10px] w-[88%] aspect-video object-cover"
                                  muted
                                  preload="auto"
                                  poster="/assets/assetsProjectGallery/MinesweeperWeb/MinesweeperWebF1.png"
                                  onMouseEnter={(e) => e.currentTarget.play()}
                                  onMouseLeave={(e) => {
                                      e.currentTarget.pause();
                                      e.currentTarget.currentTime = 0;
                                  }}
                                  >
                                  <source
                                      src="/assets/assetsProjectGallery/MinesweeperWeb/MinesweeperWeb.mp4"
                                      type="video/mp4"
                                  />
                              </video>
                          </div>
                        </div>
                        <div className="div9 relative group "
                            onMouseEnter={handleHover}
                            onMouseLeave={handleLeave}
                        >
                            <div className="inset-0 z-10 bgreveallock2Hover flex items-center justify-center transition-opacity duration-300  absolute pointer-events-none">
                                <SplitText
                                key={animationKey}
                                text="Upcoming"
                                className="absolute textLock2"
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
                            </div>
                            <div className="  inset-0 z-10 bgreveallock2 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0 group-hover:backdrop-blur-sm absolute pointer-events-none">
                                <svg className="svgLock2" version="1.0" width="94px" height="100px" viewBox="0 0 948.000000 1280.000000" >
                                    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"  stroke="none">
                                    <path d="M4522 12739 c-1038 -46 -2010 -476 -2699 -1193 -498 -518 -810 -1145 -902 -1816 -26 -183 -31 -421 -31 -1452 l0 -1088 -420 0 -421 0 -24 -25 -25 -24 0 -3426 0 -3426 25 -24 24 -25 4659 0 4659 0 21 23 22 23 0 3428 0 3427 -25 24 -24 25 -421 0 -420 0 0 1078 c0 1063 -6 1308 -35 1499 -102 680 -408 1288 -905 1797 -318 327 -648 565 -1064 770 -475 234 -1053 382 -1566 401 -80 3 -170 7 -200 9 -30 1 -133 -1 -228 -5z m449 -1179 c561 -55 1068 -255 1474 -583 94 -75 282 -264 356 -357 245 -307 405 -687 449 -1065 6 -56 10 -515 10 -1228 l0 -1137 -2547 2 -2548 3 0 1135 c0 1250 0 1239 64 1491 202 800 886 1439 1779 1663 130 32 356 70 472 79 106 8 396 6 491 -3z"/>
                                    </g>
                                </svg>
                            </div>
                        </div>
                </motion.section>
            )}
        </AnimatePresence>

        {/* Affichage des composants details selon la valeur de activeProject (cette valeur change selon ce qu'on a cliqué ) */}
        <AnimatePresence>
        {activeProject === 1 && (
          <motion.section
            key="project1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <Project1Detail onBack={handleBack} />
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeProject === 2 && (
          <motion.section
            key="project2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <Project2Detail onBack={handleBack} />
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeProject === 3 && (
          <motion.section
            key="project3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <Project3Detail onBack={handleBack} />
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeProject === 4 && (
          <motion.section
            key="project4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <Project4Detail onBack={handleBack} />
          </motion.section>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activeProject === 5 && (
          <motion.section
            key="project2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <Project5Detail onBack={handleBack} />
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeProject === 6 && (
          <motion.section
            key="project3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <Project6Detail onBack={handleBack} />
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeProject === 7 && (
          <motion.section
            key="project4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <Project7Detail onBack={handleBack} />
          </motion.section>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activeProject === 8 && (
          <motion.section
            key="project3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <Project8Detail onBack={handleBack} />
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeProject === 9 && (
          <motion.section
            key="project4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <Project9Detail onBack={handleBack} />
          </motion.section>
        )}
      </AnimatePresence>


    </section>

)};
export default BodyProjectGallery