import React, { useState, useEffect } from 'react';
import HeroMain from '../medium components/HeroMain.js';
import HeroAlternate from '../medium components/HeroAlternate.js';
import '../../style/component-style/HeroSlider.css'; 

const HeroSlider = () => {
  const [currentHero, setCurrentHero] = useState(0);

  const components = [
    <HeroMain key="main-hero" />,
    <HeroAlternate key="hero-alternate" />
  ];

  // Automatically switch between the components every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentHero((prev) => (prev === 0 ? 1 : 0));
    }, 4000); // Change every 3 seconds

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  return (
    <div className="hero-slider">
      <div className="hero-slider-wrapper" style={{ transform: `translateX(${currentHero * -100}%)` }}>
        {components.map((component, index) => (
          <div className="hero-slide" key={index}>
            {component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
