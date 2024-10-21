import React from 'react';
import logo from '../../img/logo.png';
import cartIcon from '../../img/Cart.png';
import '../../style/sections-style/Header.css';

const Header = ({ toggleCart }) => {
  return (
    <header className='header'>
      <nav className='nav-bar'>
        <img src={logo} alt='logo' className='logo' />
        <ul className='nav-bar-inner'>
          <li className='nav-bar-item'> <a href='#home'>Home</a> </li>
          <li className='nav-bar-item'> <a href='#subscribe'>Get my Cupon</a> </li>
          <li className='nav-bar-item'> <a href='#shop'>Catalog</a> </li>
        </ul>
        <img 
          src={cartIcon} 
          alt='cart' 
          className='cart-icon' 
          onClick={toggleCart}
           // Add onClick to toggle cart
        />
      </nav>
    </header>
  );
};

export default Header;
