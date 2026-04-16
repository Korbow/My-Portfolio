import gsap from 'gsap';
import { ScrollTrigger, DrawSVGPlugin, SplitText } from 'gsap/all';
import React, { useEffect } from 'react'

import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, SplitText);

const About = ({ id }) => {
    const AboutContentRef = useRef();
    const TextRef = useRef();
    const AboutSectionRef = useRef();
    const PfpAboutMe = useRef();

    
useEffect(() => {
    const ctx = gsap.context(() => {

      // Logique d'Animation GSAP

      ScrollTrigger.matchMedia({

        // Sur Mobile
        "(max-width: 767px)": function () {
          const PfpAbout = PfpAboutMe.current;

          const section = AboutSectionRef.current;
          const tlZoom = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "5% top",
              end: "10% bottom",

            }
          });
  
  
          tlZoom.fromTo(
            PfpAbout,
            { scale: 1, opacity: 1},
            { scale: 1, ease: "none", duration: 0.1, opacity: 1}  
          );

        },

        "(min-width: 768px) and (max-width: 1000px)": function () {
          const PfpAbout = PfpAboutMe.current;

          const section = AboutSectionRef.current;
          const tlZoom = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "5% top",
              end: "10% bottom",

            }
          });
  
  
          tlZoom.fromTo(
            PfpAbout,
            { scale: 1, opacity: 1},
            { scale: 1, ease: "none", duration: 0.1, opacity: 1}  
          );

        },


        "(min-width: 1001px) and (max-width: 1199px)": function () {
          const section = AboutSectionRef.current;
          const content = AboutContentRef.current;
          const PfpAbout = PfpAboutMe.current;
    
        const split = new SplitText("#pAboutMe", {
          type: "words",
        });
    
        const tlZoom = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "5% top",
            end: "+=200%",
            scrub: true,
            pin: section,
            anticipatePin: 1,
          }
        });

        tlZoom.to({}, { duration: 0.1 });

        tlZoom.fromTo(
          content,
          { scale: 1},
          { scale: 1, ease: "none", duration: 0.6}
        );
        tlZoom.fromTo(
          PfpAbout,
          { scale: 1, opacity: 0},
          { scale: 1, ease: "none", duration: 0.1, opacity: 1},">-0.2" 
        );

        tlZoom.from(
          split.words,
          {
            opacity: 0,
            y: 20,
            stagger: 0.04,
            duration: 0.5,
            ease: "power2.out"
            
          },
          ">-0.0"
        );

        tlZoom.from(".drawerWebDevelopmentSkills", {
          opacity: 0,
          x: 30,
          stagger: 0.15,
          duration: 0.5,
          ease: "power2.out",
        },
          ">-0.7"
          );

        tlZoom.from(".skillsWebDevlopmentItems", {
          opacity: 0,
          y: 30,
          stagger: 0.10,
          duration: 0.5,
          ease: "power2.out",
        },
          ">-0.1"
          );

          tlZoom.from(".drawerOthersSkills", {
            opacity: 0,
            x: 30,
            stagger: 0.15,
            duration: 0.5,
            ease: "power2.out",
          },
            ">-0.7"
            );


          tlZoom.from(".OthersItems", {
            opacity: 0,
            y: 30,
            stagger: 0.10,
            duration: 0.5,
            ease: "power2.out",
          },
            ">-0.1"
            );


        },

        // Ecran Moyen

        "(min-width: 1200px) and (max-width: 1399px)": function () {
          const section = AboutSectionRef.current;
        const content = AboutContentRef.current;
        const PfpAbout = PfpAboutMe.current;
    
        const split = new SplitText("#pAboutMe", {
          type: "words",
        });
    
        const tlZoom = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "5% top",
            end: "+=150%",
            scrub: true,
            pin: section,
            anticipatePin: 1,
          }
        });

        tlZoom.to({}, { duration: 0.1 });

        tlZoom.fromTo(
          content,
          { scale: 1},
          { scale: 1.2, ease: "none", duration: 0.6}
        );
        tlZoom.fromTo(
          PfpAbout,
          { scale: 1, opacity: 0},
          { scale: 1, ease: "none", duration: 0.1, opacity: 1},">-0.2"  
        );

        tlZoom.from(
          split.words,
          {
            opacity: 0,
            y: 20,
            stagger: 0.04,
            duration: 0.5,
            ease: "power2.out"
            
          },
          ">-0.0"
        );

        tlZoom.from(".drawerWebDevelopmentSkills", {
          opacity: 0,
          x: 30,
          stagger: 0.15,
          duration: 0.5,
          ease: "power2.out",
        },
          ">-0.7"
          );

        tlZoom.from(".skillsWebDevlopmentItems", {
          opacity: 0,
          y: 30,
          stagger: 0.10,
          duration: 0.5,
          ease: "power2.out",
        },
          ">-0.1"
          );

          tlZoom.from(".drawerOthersSkills", {
            opacity: 0,
            x: 30,
            stagger: 0.15,
            duration: 0.5,
            ease: "power2.out",
          },
            ">-0.7"
            );


          tlZoom.from(".OthersItems", {
            opacity: 0,
            y: 30,
            stagger: 0.10,
            duration: 0.5,
            ease: "power2.out",
          },
            ">-0.1"
            );


        },

        // Ecran grand

        "(min-width: 1400px) and (max-width: 1699px)": function () {
          const section = AboutSectionRef.current;
        const content = AboutContentRef.current;
        const PfpAbout = PfpAboutMe.current;
    
        const split = new SplitText("#pAboutMe", {
          type: "words",
        });
    
        const tlZoom = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "5% top",
            end: "+=250%",
            scrub: true,
            pin: section,
            anticipatePin: 1,
          }
        });

        tlZoom.to({}, { duration: 0.1 });

        tlZoom.fromTo(
          content,
          { scale: 1},
          { scale: 1.5, ease: "none", duration: 0.6}
        );
        tlZoom.fromTo(
          PfpAbout,
          { scale: 1, opacity: 0},
          { scale: 1, ease: "none", duration: 0.1, opacity: 1},">-0.2"  
        );

        tlZoom.from(
          split.words,
          {
            opacity: 0,
            y: 20,
            stagger: 0.04,
            duration: 0.5,
            ease: "power2.out"
            
          },
          ">-0.0"
        );

        tlZoom.from(".drawerWebDevelopmentSkills", {
          opacity: 0,
          x: 30,
          stagger: 0.15,
          duration: 0.5,
          ease: "power2.out",
        },
          ">-0.7"
          );

        tlZoom.from(".skillsWebDevlopmentItems", {
          opacity: 0,
          y: 30,
          stagger: 0.10,
          duration: 0.5,
          ease: "power2.out",
        },
          ">-0.1"
          );

          tlZoom.from(".drawerOthersSkills", {
            opacity: 0,
            x: 30,
            stagger: 0.15,
            duration: 0.5,
            ease: "power2.out",
          },
            ">-0.7"
            );


          tlZoom.from(".OthersItems", {
            opacity: 0,
            y: 30,
            stagger: 0.10,
            duration: 0.5,
            ease: "power2.out",
          },
            ">-0.1"
            );


        },

        // Plein Ecran
      "(min-width: 1700px)": function () {
        const section = AboutSectionRef.current;
        const content = AboutContentRef.current;
        const PfpAbout = PfpAboutMe.current;
    
        const split = new SplitText("#pAboutMe", {
          type: "words",
        });
    
        const tlZoom = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "5% top",
            end: "+=350%",
            scrub: true,
            pin: section,
            anticipatePin: 1,
          }
        });
        
        tlZoom.to({}, { duration: 0.1 });

        tlZoom.fromTo(
          content,
          { scale: 1},
          { scale: 1.7, ease: "none", duration: 0.6}
        );
        tlZoom.fromTo(
          PfpAbout,
          { scale: 1, opacity: 0},
          { scale: 1, ease: "none", duration: 0.1, opacity: 1},">-0.2" 
        );

        tlZoom.from(
          split.words,
          {
            opacity: 0,
            y: 20,
            stagger: 0.04,
            duration: 0.5,
            ease: "power2.out"
            
          },
          ">-0.0"
        );
    
        tlZoom.from(".drawerWebDevelopmentSkills", {
          opacity: 0,
          x: 30,
          stagger: 0.15,
          duration: 0.5,
          ease: "power2.out",
        },
          ">-0.7"
          );

        tlZoom.from(".skillsWebDevlopmentItems", {
          opacity: 0,
          y: 30,
          stagger: 0.10,
          duration: 0.5,
          ease: "power2.out",
        },
          ">-0.1"
          );

          tlZoom.from(".drawerOthersSkills", {
            opacity: 0,
            x: 30,
            stagger: 0.15,
            duration: 0.5,
            ease: "power2.out",
          },
            ">-0.7"
            );


          tlZoom.from(".OthersItems", {
            opacity: 0,
            y: 30,
            stagger: 0.10,
            duration: 0.5,
            ease: "power2.out",
          },
            ">-0.1"
            );
        
        // temps mort pr décalage
        tlZoom.to({}, { duration: 1.2 });
      }
    });

  });
  
    return () => ctx.revert();
  }, []);

  return (
    <div className=' BlackBackgroundCool bg-black' id={id}>
    <div className="AboutBackground bg-black " ref={AboutSectionRef}>
        <div className="AboutContent" ref={AboutContentRef}>
            <div className="Text" ref={TextRef}>
                <div className="AboutMe" >
                    <img src="/assets/rond-pfp.png" className="imgPfpAboutMe" ref={PfpAboutMe}/>
                    <p className="pAboutMe" id="pAboutMe">
                      France-based student currently growing into <span className="highlightGreen">development</span>, 
                      <span className="highlightGreen"> web design</span>, <span className="highlightGreen"> AI architecture </span>, 
                      and <span className="highlightGreen">content creation</span>.<br></br> Improving daily and shaping my own touch on the world.
                        <span className="highlightGreen"> Open to creative opportunities.</span>
                    </p>
                </div>
                <div className="Skills">

                    <div className="drawerItem">
                        <div className="drawerWebDevelopmentSkills">
                        <div className="titledrawer">
                                <h3>Web development :</h3>
                            </div>
                            <div className="skillsWebDevlopment">
                                <div className="skillsWebDevlopmentItems">
                                    <img src="/assets/SkillsSection/icons/HTML.png"/>
                                    <p>HTML</p>
                                </div>

                                <div className="skillsWebDevlopmentItems">
                                    <img src="/assets/SkillsSection/icons/CSS.png"/>
                                    <p>CSS</p>
                                </div>

                                <div className="skillsWebDevlopmentItems">
                                    <img src="/assets/SkillsSection/icons/JS.png"/>
                                    <p> Javascript</p>
                                </div>

                                <div className="skillsWebDevlopmentItems">
                                    <img src="/assets/SkillsSection/icons/REACT.png"/>
                                    <p> React</p>
                                </div>

                                <div className="skillsWebDevlopmentItems">
                                    <img src="/assets/SkillsSection/icons/GSAP.png"/>
                                    <p> GSAP</p>
                                </div>

                                <div className="skillsWebDevlopmentItems">
                                    <img src="/assets/SkillsSection/icons/TAILWIND.png"/>
                                    <p> Tailwind</p>
                                </div>
                            </div>
                        </div>

                        <div className="drawerOthersSkills">
                            <div className="titledrawer">
                                <h3>Others :</h3>
                            </div>

                            <div className="Others">
                                <div className="OthersItems">
                                    <img src="/assets/SkillsSection/icons/PAINTNET.png"/>
                                    <p>Paint.net</p>
                                </div>

                                <div className="OthersItems">
                                    <img src="/assets/SkillsSection/icons/JAVA.png"/>
                                    <p>Java</p>
                                </div>

                                <div className="OthersItems">
                                    <img src="/assets/SkillsSection/icons/UE4.png"/>
                                    <p>Unreal Engine 4</p>
                                </div>

                                <div className="OthersItems">
                                    <img src="/assets/SkillsSection/icons/DAVINCI.png"/>
                                    <p>DaVinci Resolve</p>
                                </div>

                                <div className="OthersItems">
                                    <img src="/assets/SkillsSection/icons/BLENDER.png"/>
                                    <p>Blender</p>
                                </div>

                                <div className="OthersItems">
                                    <img src="/assets/SkillsSection/icons/SPIGOT.png"/>
                                    <p>Spigot</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About