import React, { useState } from 'react';
import '../style/App.css';
import Header from '../components/sections/Header.js';
import Home from '../components/sections/Home.js';
import Catalog from '../components/sections/Catalog.js';
import Subscribe from '../components/sections/Subscribe.js';
import Shop from '../components/sections/Shop.js';
import Footer from '../components/sections/Footer.js';
import Overlay from '../components/medium components/StartOverlay.js';
import UnderageMessage from '../components/small components/UnderageMessage.js';
import Cart from '../components/big components/Cart.js'; 

function App() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [underage, setUnderage] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // Cart state

  const handleYesClick = () => {
    console.log("User is 18 or older. Hiding overlay.");
    setShowOverlay(false); 
  };

  const handleNoClick = () => {
    console.log("User is underage. Displaying underage message.");
    setUnderage(true); 
    setShowOverlay(false); 
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen); // Toggle cart visibility
  };

  return (
    <div className="app-container">
      {showOverlay && (
        <Overlay
          handleYesClick={handleYesClick}
          handleNoClick={handleNoClick}
        />
      )}

      {!underage && (
        <main className={`main-content ${showOverlay ? 'blurred' : ''}`}>
          <Header toggleCart={toggleCart} /> {/* Pass toggleCart to Header */}
          <Home />
          <Catalog toggleCart={toggleCart}/>
          <Subscribe />
          <Shop toggleCart={toggleCart}/>
          <Footer />
        </main>
      )}

      {underage && <UnderageMessage />}

      {/* Cart will appear if isCartOpen is true */}
      {isCartOpen && <Cart toggleCart={toggleCart} /> 
    }
    </div>
  );
}

export default App;
