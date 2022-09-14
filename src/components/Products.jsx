import React from 'react';

// import data
import { products } from '../data';

// import components
import ProductSlider from '../components/ProductSlider';

const Products = () => {
  // destructuring
  const { title, subtitle } = products;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        {/* slider */}
        <ProductSlider/>
      </div>
    </section>
  );
};

export default Products;
