import React from 'react';
import SelectButton from '../small components/SelectButton.js'; // Ensure the path is correct
import '../../style/sections-style/Catalog.css';

export const CatalogItem = ({ id, imgSrc, altText, titleItem, priceItem , toggleCart}) => {
  
  return (
    <li className='catalog-item'>
      <img src={imgSrc} alt={altText} className='catalog-item-img' />
      <p className='catalog-item-title'>{titleItem}</p>
      <p className='price-item'>{priceItem}</p>
        <SelectButton id={id}  titleItem={titleItem} priceItem={priceItem} toggleCart={toggleCart}/>
    </li>
  );
};

export default CatalogItem;
