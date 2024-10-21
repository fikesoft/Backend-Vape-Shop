import React from 'react';
import CatalogItem from '../medium components/CatalogItem.js'; // Ensure the path is correct
import CatalogItem2 from '../../img/catalogItem2.png';
import '../../style/sections-style/Shop.css';

const items = [
  { id: 1, imgSrc: CatalogItem2, altText: 'Image 2', titleItem: 'ELF-BAR 5', priceItem: '18.99 EUR' }, 
  { id: 2, imgSrc: CatalogItem2, altText: 'Image 2', titleItem: 'ELF-BAR 5', priceItem: '17.49 EUR' },
  { id: 3, imgSrc: CatalogItem2, altText: 'Image 2', titleItem: 'ELF-BAR 5', priceItem: '19.99 EUR' },
  { id: 4, imgSrc: CatalogItem2, altText: 'Image 2', titleItem: 'ELF-BAR 5', priceItem: '18.99 EUR' }, 
  { id: 5, imgSrc: CatalogItem2, altText: 'Image 2', titleItem: 'ELF-BAR 5', priceItem: '17.49 EUR' },
  { id: 6, imgSrc: CatalogItem2, altText: 'Image 2', titleItem: 'ELF-BAR 5', priceItem: '19.99 EUR' },
  { id: 7, imgSrc: CatalogItem2, altText: 'Image 2', titleItem: 'ELF-BAR 5', priceItem: '18.99 EUR' }, 
  { id: 8, imgSrc: CatalogItem2, altText: 'Image 2', titleItem: 'ELF-BAR 5', priceItem: '17.49 EUR' },
  { id: 9, imgSrc: CatalogItem2, altText: 'Image 2', titleItem: 'ELF-BAR 5', priceItem: '19.99 EUR' },
  { id: 10, imgSrc: CatalogItem2, altText: 'Image 2', titleItem: 'ELF-BAR 5', priceItem: '18.99 EUR' }, 
  { id: 11, imgSrc: CatalogItem2, altText: 'Image 2', titleItem: 'ELF-BAR 5', priceItem: '17.49 EUR' },
  { id: 12, imgSrc: CatalogItem2, altText: 'Image 2', titleItem: 'ELF-BAR 5', priceItem: '19.99 EUR' },
  
];

const Shop = ({toggleCart}) => {
  return (
    <section className='shop' id='shop'>
      <h1 className='shop-title'>Our Catalog</h1>
      <ul className='shop-list'>
        {items.map((item) => (
          <CatalogItem
            key={item.id}
            id={item.id}
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

export default Shop;
