import React from 'react'
import '../../style/sections-style/Home.css'
export const MainHero = () => {
  return (
    <div className='main-hero'>
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className='hero-title-container'>
            <h1 className='hero-title'>Buy One Get One Free</h1>
            <button className='hero-button'>Shop Now</button>
          </div>

          <div className='hero-title-container'>
            <h1 className='hero-title'>Big Drips Dissposible</h1>
            <button className='hero-text'>Add to cart now</button>
            </div>
          
        </div>
        
    </div>
  )
}
export default MainHero