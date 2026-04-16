import React from 'react'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import "../style/Pricing.css";
import "../style/Footer.css";

const Pricing = ({ id }) => {
  const PricingPinRef = useRef(null);
  return (
    <div ref={PricingPinRef} className='h-screen' id={id}>
      <div className="wrapper">
        <div className="card">
          <div className="content">
            PRICING
          </div>
        </div>
        <img src="/assets/PricingSection/chainTogether.png"></img>
        <div className='ContactNoPrice'>
          <p>
          No pricing yet.<br></br>
          Get me in touch on on of my socials to discuss together.<br></br>
          <a href="mailto:korbow.contact@gmail.com">Or send me an email: <span>korbow.contact@gmail.com</span></a>
          </p>
          
        </div>
      </div>
      
      <Footer triggerRef={PricingPinRef }/>
    </div>
    
  )
}

export default Pricing


const Footer = ({ triggerRef }) => {
  const wrapperRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      // Logique d'animation GSAP
      
      ScrollTrigger.matchMedia({

        // Ecran TEL
        "(max-width: 768px)": function() {

          gsap.fromTo(
            footerRef.current,
            {
              y: 1200,
              scale: 1,
              borderRadius: "5px",
            },
            {
              y: 0,  
              scale: 0.6,
              ease: "none",
              borderRadius: "60px",
              scrollTrigger: {
                trigger: wrapperRef.current,
                start: "500 90%",
                end: "+=920 90%",
                scrub: true,
                pin: triggerRef.current, 

              }
            }
          );

        },
        "(min-width: 768px) and (max-width: 1000px)": function() {

          gsap.fromTo(
            footerRef.current,
            {
              y: 1200,
              scale: 1,
              borderRadius: "5px",
            },
            {
              y: 0,  
              scale: 0.6,
              ease: "none",
              borderRadius: "60px",
              scrollTrigger: {
                trigger: wrapperRef.current,
                start: "500 90%",
                end: "+=920 90%",
                scrub: true,
                pin: triggerRef.current, 

              }
            }
          );

        },
        // Grands ecrans
        "(min-width: 1001px)": function() {
          gsap.fromTo(
            footerRef.current,
            {
              y: 1200,
              scale: 1.0,
              borderRadius: "5px",
              
            },
            {
              y: 0,  
              scale: 0.6,
              ease: "none",
              borderRadius: "60px",
              scrollTrigger: {
                trigger: wrapperRef.current,
                start: "200 90%",
                end: "+=600 90%",
                scrub: true,
                pin: triggerRef.current, 

              }
            }
          );
      
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    
    <div className="footer-wrapper" ref={wrapperRef}>
      
      <footer className="footer" ref={footerRef}>
        <div className="footerFlex">
          <div className="footerColumnNotes">
            <div className="footerColumnLink">
              <div className="margin-bottom margin-xsmall">
                <div className="footer_heading">Navigation</div>
              </div>
              <div className="list">
                {/* Liens + reactDom */}

                <a href="#hero" className="footer_link">Home</a>

                <Link to="/myProjects" className="footer_link">Project Gallery</Link>

                <Link to="/plant" className="footer_link">Plant</Link>

                <Link to="/project-detail" className="footer_link">Vinyle Songs</Link>
              </div>
            </div>
            <div className="footerColumnContact">
              <div className="margin-bottom margin-xsmall">
                <div className="footer_heading">Contact</div>
              </div>
              <div className="list">
                <a href="/mentions-legales" className="footer_link">Github</a>
                
                <a href="mailto:contact@ciaokombucha.com" className="footer_link w-inline-block"></a>
                <div>Discord</div>
                <a href="mailto:contact@ciaokombucha.com" className="footer_link">Email</a>
              </div>
            </div>

              <div className="footerColumnSocials">
                <div className="footerColumnSocialsLigne1">
                  <a href="https://www.instagram.com/ciaokombucha" target="_blank" className="buttonFooterSocial">
                    <div className="icon-embed-xsmall w-embed">
                      <svg viewBox="0 0 20 20"><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Page-1" stroke="none" strokeWidth="1" > <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" > <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#e7e7e7ea]"> </path> </g> </g> </g> </g></svg>
                    </div>
                  </a>
                  <a href="https://www.instagram.com/ciaokombucha" target="_blank" className="buttonFooterSocial">
                    <div className="icon-embed-xsmall w-embed">
                      <svg viewBox="0 -3 20 20"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">  <g id="Page-1" stroke="none" strokeWidth="1"  fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" > <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]"> </path> </g> </g> </g> </g></svg>
                    </div>
                  </a>
                </div>

                <div className="footerColumnSocialsLigne2">
                  <a href="https://www.instagram.com/ciaokombucha" target="_blank" className="buttonFooterSocial">
                    <div className="icon-embed-xsmall w-embed">
                    <svg id="insta" viewBox="0 0 32 32" >
                      <g>
                      <path d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z"/>
                      <path d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8   c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z"/>
                      <path d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8   c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z"/>
                      </g>
                      </svg>
                    </div>
                  </a>
                  <a href="https://www.instagram.com/ciaokombucha" target="_blank" className="buttonFooterSocial">
                    <div className="icon-embed-xsmall w-embed">
                    <svg viewBox="0 0 24 24"> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path> </svg>
                    </div>
                  </a>
                </div>
              </div>
          </div>
          <div className="footerLabel">
            <h4>@2025 Korbow's Portfolio</h4>
          </div>
        </div>
      </footer>
    </div>
  );
};

export { Footer }