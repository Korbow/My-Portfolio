import gsap from 'gsap';
import { ScrollTrigger, DrawSVGPlugin, SplitText } from 'gsap/all';
import React, { useEffect } from 'react'

import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, SplitText);

const About = () => {
    const AboutContentRef = useRef();
    const TextRef = useRef();
    const AboutSectionRef = useRef();

    
useEffect(() => {
    const ctx = gsap.context(() => {
  
      const section = AboutSectionRef.current;
      const content = AboutContentRef.current;
  
      const split = new SplitText("#pAboutMe", {
        type: "words",
      });
  
      const tlZoom = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=150%",
          scrub: true,
          pin: section,
          anticipatePin: 1,
        }
      });
      
      tlZoom.fromTo(
        content,
        { scale: 1 },
        { scale: 1.7, ease: "none", duration: 0.6 } // 👈 60% du scroll
      );
      
      // temps mort (rien ne se passe, mais le pin continue)
      tlZoom.to({}, { duration: 0.4 });


      const tl = gsap.timeline({
        scrollTrigger: {
            trigger: content,
            start: "top+=100% top", // 👈 point de déclenchement
            end: "top+=105% top",     // 👈 zone active
            markers: true,
            toggleActions: "play play play reverse",
        }
      });
  

      // 2️⃣ Texte
      tl.from(
        split.words,
        {
          opacity: 0,
          y: 20,
          stagger: 0.02,
          ease: "power2.out"
        },
        ">-0.1"
      );
  
      // 3️⃣ Skills
      tl.from(".drawerItem > div", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.5,
        ease: "power2.out",
      },
        ">-0.0"
        );
  
    });
  
    return () => ctx.revert();
  }, []);

  return (
    <div className="AboutBackground h-200vh bg-black " ref={AboutSectionRef}>
        <div className="AboutContent" ref={AboutContentRef}>
            <div className="Text" ref={TextRef}>
                <div className="AboutMe" >
                    <img src="..\ressources\rond-pfp.png" className="imgPfpAboutMe"/>
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
                                    <img src="..\ressources\iconSkills\HTML.png"/>
                                    <p>HTML</p>
                                </div>

                                <div className="skillsWebDevlopmentItems">
                                    <img src="..\ressources\iconSkills\CSS.png"/>
                                    <p>CSS</p>
                                </div>

                                <div className="skillsWebDevlopmentItems">
                                    <img src="..\ressources\iconSkills\JS.png"/>
                                    <p> Javascript</p>
                                </div>

                                <div className="skillsWebDevlopmentItems">
                                    <img src="..\ressources\iconSkills\REACT.png"/>
                                    <p> React</p>
                                </div>

                                <div className="skillsWebDevlopmentItems">
                                    <img src="..\ressources\iconSkills\GSAP.png"/>
                                    <p> GSAP</p>
                                </div>

                                <div className="skillsWebDevlopmentItems">
                                    <img src="..\ressources\iconSkills\TAILWIND.png"/>
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
                                    <img src="..\ressources\iconSkills\PAINTNET.png"/>
                                    <p>Paint.net</p>
                                </div>

                                <div className="OthersItems">
                                    <img src="..\ressources\iconSkills\JAVA.png"/>
                                    <p>Java</p>
                                </div>

                                <div className="OthersItems">
                                    <img src="..\ressources\iconSkills\UE4.png"/>
                                    <p>Unreal Engine 4</p>
                                </div>

                                <div className="OthersItems">
                                    <img src="..\ressources\iconSkills\DAVINCI.png"/>
                                    <p>DaVinci Resolve</p>
                                </div>

                                <div className="OthersItems">
                                    <img src="..\ressources\iconSkills\BLENDER.png"/>
                                    <p>Blender</p>
                                </div>

                                <div className="OthersItems">
                                    <img src="..\ressources\iconSkills\SPIGOT.png"/>
                                    <p>Spigot</p>
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