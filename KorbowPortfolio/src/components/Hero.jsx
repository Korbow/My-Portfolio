import React from 'react'

const Hero = () => {
  return (
    <div className="HeroContent">
        <div className="HeroTitle">
        <h3 className="h3Hero">Hi !  <span class="HighLightSpan">I'm a self-taught Web Developer.</span> <br/> I create cool web experiences for ambitous people. Found more about me below </h3>
        </div>
        
        <div className="ImagePfp">
          <svg className="ContourImagePfp">
          <circle r="284" cx="300" cy="300" stroke="black" strokeWidth={5} fill='transparent'/>
          </svg>
          <img src="..\ressources\rond-pfp.png"></img>
        </div>

        <div className="HeroBanner">
          <h2>KORBOW</h2>
        </div>


        
        
    </div>
  )
}

export default Hero