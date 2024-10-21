import React from 'react';
import CatalogItem from '../medium components/CatalogItem.js'; // Ensure the path is correct
import CatalogImg1 from '../../img/catalogItem1.png'; // Ensure the image path is correct
import '../../style/sections-style/Catalog.css';

const items = [
  { id: 13, imgSrc: CatalogImg1, altText: 'Image 1', titleItem: 'Item 1', priceItem: '18.99 EUR'  }, 
  { id: 14, imgSrc: CatalogImg1, altText: 'Image 1', titleItem: 'Item 2', priceItem: '18.99 EUR' },
  { id: 15, imgSrc: CatalogImg1, altText: 'Image 1', titleItem: 'Item 3', priceItem: '18.99 EUR' },
  { id: 16, imgSrc: CatalogImg1, altText: 'Image 1', titleItem: 'Item 4', priceItem: '18.99 EUR' },
  { id: 17, imgSrc: CatalogImg1, altText: 'Image 1', titleItem: 'Item 5', priceItem: '18.99 EUR' },
];

const Catalog = ({toggleCart}) => {
  return (
    <section className='catalog'>
      <h1 className='catalog-title'>Our New Catalog</h1>
      <ul className='catalog-list'>
        {items.map((item) => (
          <CatalogItem
            key={item.id}
            id={item.id} // Pass the id prop
            imgSrc={item.imgSrc}
            altText={item.altText}
            titleItem={item.titleItem}
            priceItem={item.priceItem}
            toggleCart={toggleCart}
          />
        ))}
      </ul>
    </section>
  );
};

export default Catalog;
