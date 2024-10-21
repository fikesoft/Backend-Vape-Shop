import React from 'react';
import '../../style/component-style/StartOverlay.css'; // Import the overlay styles

const StartOverlay = ({ handleYesClick, handleNoClick }) => {
  return (
    <div className="start-overlay">
      <div className="overlay-content">
        <h2>Are you 18 years old or older?</h2>
        <button onClick={handleYesClick}>Yes</button>
        <button onClick={handleNoClick}>No</button>
      </div>
    </div>
  );
};

export default StartOverlay;
