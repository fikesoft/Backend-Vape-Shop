import React, { useState, useRef, useEffect } from 'react';
import '../../style/component-style/SelectOption.css';
import airplaneVideo from '../../img/airplane.webm'; // Import the airplane video

export const SelectButton = ({ id, titleItem, priceItem, toggleCart }) => {
  const [isAnimating, setIsAnimating] = useState(false); // To trigger animation
  const airplaneRef = useRef(null); // Reference to the airplane video
  const buttonRef = useRef(null); // Reference to the button to get its position

  const handleSelect = (e) => {
    // Check if the item is already in localStorage
    const existingItem = localStorage.getItem(`selectedItem_${id}`);

    if (existingItem) {
      const item = JSON.parse(existingItem);
      item.quantity += 1; // Increment quantity
      localStorage.setItem(`selectedItem_${id}`, JSON.stringify(item));
    } else {
      const newItem = { id, title: titleItem, price: priceItem, quantity: 1 };
      localStorage.setItem(`selectedItem_${id}`, JSON.stringify(newItem));
    }

    // Start the animation
    setIsAnimating(true);
  };

  useEffect(() => {
    if (isAnimating && airplaneRef.current && buttonRef.current) {
      const airplane = airplaneRef.current;
      const button = buttonRef.current;

      // Get button's position relative to the viewport
      const buttonRect = button.getBoundingClientRect();
      
      // Set the airplane's starting position based on the button's position
      airplane.style.left = `${buttonRect.left}px`;
      airplane.style.top = `${buttonRect.top}px`;

      airplane.play();

      // After the animation (webm video length), open the cart and stop the animation
      setTimeout(() => {
        setIsAnimating(false);
        toggleCart(); // Open the cart after the animation
      }, 2000); // Adjust timing to match animation length
    }
  }, [isAnimating, toggleCart]);

  return (
    <>
      <button className="select-option" onClick={handleSelect} ref={buttonRef}>
        Select Option
      </button>

      {/* Airplane Animation */}
      {isAnimating && (
       <video
        ref={airplaneRef}
        className="airplane-animation"
        playsInline
        muted
        autoPlay
        loop={false} // No looping; play once
        style={{ display: isAnimating ? 'block' : 'none' }}>
        <source src={airplaneVideo} type="video/webm" />
        <source src="/path/to/airplane.mp4" type="video/mp4" /> {/* Fallback */}
        Your browser does not support the video tag.
      </video>
     
      
      
      )}
    </>
  );
};

export default SelectButton;