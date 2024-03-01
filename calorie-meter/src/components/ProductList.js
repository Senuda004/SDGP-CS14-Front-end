import React from 'react';
import './circBar.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {/* Loop through each product and create a ProductCard component */}
      {products.map(product => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className='main'>
      <div className="product-card">
        <img
          src={product.image}
          alt={product.name}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
        <div className='details'>
          <h1>{product.brand} {product.name}</h1>
          <h6>{product.category}</h6>
          {/*<p>Protein: {product.nutrition.protein}</p>
          <p>Carbs: {product.nutrition.carbs}</p>
          <p>Fat: {product.nutrition.fat}</p>*/}
        </div>
      </div>
    </div>  
  );
};

export default ProductList;
