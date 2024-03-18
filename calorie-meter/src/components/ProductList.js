import React, { useState } from 'react';
import './circBar.css';
import { Line } from 'rc-progress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';

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
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className='main'>
      <div className="product-card">
        <div className='menuIcon' onClick={togglePopup}>
          <FontAwesomeIcon icon={faEllipsisVertical} style={{ width: '400px' }} />
        </div>
        <img
          src={product.image}
          alt={product.name}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
        <div className='details'>
          <h1>{product.brand} {product.name}</h1>
          <h6>{product.category}</h6>
        </div>
        <div className="progress-bars">
          {/* Protein Progress Bar */}
          <div className="progress-bar">
            <Line percent={product.nutrition.protein} strokeWidth="30" strokeColor="#5cb85c" trailWidth="30" trailColor='#C4EAC4' />
            <p>Protein: {product.nutrition.protein}</p>
          </div>

          {/* Carbs Progress Bar */}
          <div className="progress-bar">
            <Line percent={product.nutrition.carbs} strokeWidth="30" strokeColor="#5bc0de" trailWidth="30" trailColor='#C2E3ED' />
            <p>Carbs: {product.nutrition.carbs}</p>
          </div>

          {/* Fat Progress Bar */}
          <div className="progress-bar">
            <Line percent={product.nutrition.fat} strokeWidth="30" strokeColor="#d9534f" trailWidth="30" trailColor='#EDBAB9' className='fatbar' />
            <p>Fat: {product.nutrition.fat}</p>
          </div>
        </div>
        {isPopupVisible && (
          <div className="popup-box">
            <button className="add-button">
              <FontAwesomeIcon icon={faPlus} />
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
