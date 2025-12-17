import gsap from 'gsap';
import { ScrollTrigger, DrawSVGPlugin } from 'gsap/all';
import React, { useEffect } from 'react'

import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);



const Hero = () => {

    const heroRef = useRef();
    const pfpRef = useRef();
    const svgRef = useRef();
    const titleRef = useRef();
    const socialRef = useRef();

    useEffect(() => {


      gsap.to(".highLightAnim", {
        "--p": 1,
        duration: 1.2,
        delay: 1.4,
        ease: "power3.out"
      });

      gsap.fromTo(svgRef.current, 
        {drawSVG:"62.5% 62.5%", stroke:"white"},
        {duration: 1, drawSVG:"0% 100%", stroke:"black"}, 0.3

      );

      gsap.to(titleRef.current, 
        {opacity: 1, duration: 1.5, color:"black", y:0}

      );

      gsap.to(socialRef.current, 
        {x:30, duration: 1.5, color:"black", y:0}

      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",        // début quand le haut de hero atteint le haut du viewport
          end: "+=90%",           // durée du scroll pour l'animation (1 viewport ici)
          pin: true,               // on fixe le hero pendant la timeline
          scrub: true,             // l'animation suit le scroll
          anticipatePin: 1,        // lisse la transition pin/unpin
          onLeave: () => console.log("Pin terminé, scroll normal"), // optionnel
        },
      });

      tl.fromTo(svgRef.current, {drawSVG:"62.5% 175%"}, {duration: 4, drawSVG:"100% 100%"}

      );

      return () => ScrollTrigger.getAll().forEach(st => st.kill());
    }, []);
    
  
  return (
    <div className="HeroContent" ref={heroRef}>
        <div className="HeroTitle">
        <h3 className="h3Hero">Hi !  <span className="HighLightSpan highLightAnim">I'm a self-taught Web Developer.</span> <br/> I create cool web experiences for ambitous people. Found more about me below </h3>
        </div>

        <div className="WNUAI-section">
        <h3 className="WNUAI">Why not use AI?</h3>
        </div>
        
        <div className="ImagePfp" >
          <svg className="ContourImagePfp" ref={pfpRef}>
          <circle r="284" cx="300" cy="300" stroke="black" strokeWidth={5} fill='transparent' ref={svgRef}/>
          </svg>
          <img src="..\ressources\rond-pfp.png"></img>
        </div>

        <div className="HeroBanner" ref={titleRef}>
          <h2>KORBOW</h2>
        </div>

        <nav className="absolute top-160 right-0" ref={pfpRef}> 
        <div className="Socials">
          <div className="itemHeroSocials">
            <svg viewBox="0 0 20 20"><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#e7e7e7ea"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#e7e7e7ea]"> </path> </g> </g> </g> </g></svg>
            <svg viewBox="0 -28.5 256 256"  preserveAspectRatio="xMidYMid" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#e7e7e7ea" fillRule="nonzero"> </path> </g> </g></svg>
            <svg viewBox="0 -3 20 20"  ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill="#e7e7e7ea"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]"> </path> </g> </g> </g> </g></svg>
            <svg viewBox="0 0 24 24"> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/> </svg>
          </div>
        </div>
        </nav>
    </div>
  )
}

export default Hero