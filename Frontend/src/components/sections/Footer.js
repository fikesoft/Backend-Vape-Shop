import React from 'react';
import ustIcon from '../../img/usdtIcon.png';
import tonIcon from '../../img/tonIcon.png';
import maticIcon from '../../img/maticIcon.png';
import xrpIcon from '../../img/xrpIcon.png';
import revolutIcon from '../../img/Revolut-Logo.wine.svg';
import paypalIcon from '../../img/paypalIcon.png';
import '../../style/sections-style/Footer.css';

export const Footer = () => {
  return (
    <footer className='footer'>
        {/* Overlay for the footer */}
        <div className="footer-overlay">
        </div>

        <h1 className='footer-title'>Accepted payments</h1>
        <ul className='footer-list-payments'>
            <li className='list-item'> <img src={ustIcon} alt='photo1' className='icon' /> </li>
            <li className='list-item'> <img src={tonIcon} alt='photo2' className='icon' /> </li>
            <li className='list-item'> <img src={maticIcon} alt='photo3' className='icon' /> </li>
            <li className='list-item'> <img src={xrpIcon} alt='photo4' className='icon' /> </li>
            <li className='list-item'> <img src={revolutIcon} alt='photo5' className='icon' /> </li>
            <li className='list-item'> <img src={paypalIcon} alt='photo6' className='icon' /> </li>
        </ul>
    </footer>
  );
};

export default Footer;
