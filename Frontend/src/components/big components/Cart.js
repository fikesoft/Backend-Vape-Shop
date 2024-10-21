import React, { useState, useEffect } from 'react';
import '../../style/component-style/Cart.css';

const Cart = ({ toggleCart }) => {
  const [cartItems, setCartItems] = useState([]);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [gmail, setGmail] = useState('');
  const [coupon, setCoupon] = useState('');
  const [agreeContact, setAgreeContact] = useState(false); // State for checkbox

  // Fetch cart items from localStorage when component mounts
  useEffect(() => {
    const storedItems = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('selectedItem_')) {
        const item = JSON.parse(localStorage.getItem(key));
        storedItems.push(item);
      }
    }
    setCartItems(storedItems);
      console.log("Cart Items:", storedItems); // Optional: to check the cart items in console
  }, []);

  const handleBuyNow = () => {
    const orderDetails = { name, surname, phoneNumber, address, cartItems, agreeContact };
    console.log("Order details:", orderDetails);
    localStorage.clear()
    toggleCart()
    // Need to clean the website li and local stoarge 
    // Animation complete buy  


  };

  return (
    <div className="cart-container">
      <button className="cart-close-button" onClick={toggleCart}>X</button>
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.title} - {item.price} (x{item.quantity})
              </li>
            ))}
          </ul>
        )}
      </div>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="cart-input"
      />
      <input
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        className="cart-input"
      />
      <input
        type="text"
        placeholder="Enter your address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="cart-input"
      />
      <input
        type="text"
        placeholder="Enter your gmail"
        value={gmail}
        onChange={(e) => setGmail(e.target.value)}
        className="cart-input"
      />
      <input
        type="tel"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="cart-input"
      />
      <input
        type="tel"
        placeholder="Enter your coupon if you have it"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        className="cart-input"
      />

      {/* Checkbox for WhatsApp/Telegram contact */}
      <label className="contact-checkbox-label">
        <input
          type="checkbox"
          checked={agreeContact}
          onChange={(e) => setAgreeContact(e.target.checked)}
          className="contact-checkbox"
        />
        Agree to be contacted via WhatsApp or Telegram to complete the order
      </label>

      <button className="buy-now-button" onClick={handleBuyNow}>
        Buy Now
      </button>
    </div>
  );
};

export default Cart;
