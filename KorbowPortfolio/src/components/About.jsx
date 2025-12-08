import gsap from 'gsap';
import { ScrollTrigger, DrawSVGPlugin } from 'gsap/all';
import React, { useEffect } from 'react'

import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const About = () => {
    const AboutContentRef = useRef();

    useEffect(() => {

        const el = AboutContentRef.current;

        gsap.fromTo(
            el,
            { scale: 1 },
            {
            scale: 1.9,
            scrollTrigger: {
                trigger: el,
                start: "top 80%",   // quand il arrive dans le viewport
                end: "bottom 20%",
                scrub: true,        // l'animation suit le scroll
            }
            }
        );

        },[]);

  return (
    <div className="AboutBackground h-screen bg-black ">
        <div className="AboutContent" ref={AboutContentRef}>
            <div className="Text">
                <div className="AboutMe">
                Currently growing into :

                Developer

                Web Designer

                AI Architect

                Content Creator
                </div>
                <div className="Skills">

                </div>
            </div>
        </div>

      </div>
  )
}

export default About