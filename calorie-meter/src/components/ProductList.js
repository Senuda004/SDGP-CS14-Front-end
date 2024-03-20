import React, { useState, useEffect } from 'react';
import './productList.css';
import { Line } from 'rc-progress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';


const ProductList = ({ products}) => {
  /*
  const handleAddToGoal = () => {
    if (!newGoal) {
      alert('Please set a goal first.');
      return;
    }
    const newConsumed = updateConsumed(consumed - 10); // Update consumed directly
    if (newConsumed < 0) {
      alert('Adding this product will exceed your daily goal!');
    }
  };

  const handleDeleteFromGoal = () => {
    if (!newGoal) {
      alert('Please set a goal first.');
      return;
    }
    updateConsumed(consumed + 10); // Update consumed directly
  };*/

  return (
    <div className="product-list">
      {/* Loop through each product and create a ProductCard component */}
      {products.map(product => (
        <ProductCard 
          key={product.name}
          product={product} 
         /* newGoal={newGoal}
          consumed={consumed}
          updatedConsumed={updateConsumed}
          handleAddToGoal={handleAddToGoal} // Pass the handler functions as props
          handleDeleteFromGoal={handleDeleteFromGoal}*/
        />
      ))}
    </div>
  );
};


const ProductCard = ({ product}) => {  
  const [isPopupVisible, setPopupVisible] = useState(false);
  
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };


  return (
    <div className='main'>
      <div className="product-card">
        <div className='menuIcon' onClick={togglePopup}>
          <FontAwesomeIcon icon={faEllipsisVertical} style={{ width: '500px' }} />
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
          
          <div className="progress-bars">
            
            {/* Protein Progress Bar */}
            <div className="progress-bar">
              <Line percent={product.nutrition.protein} strokeWidth="5" strokeColor="#5cb85c" trailWidth="5" trailColor='#C4EAC4' />
              <p>Protein: {product.nutrition.protein}</p>
            </div>

            {/* Carbs Progress Bar */}
            <div className="progress-bar">
              <Line percent={product.nutrition.carbs} strokeWidth="5" strokeColor="#5bc0de" trailWidth="5" trailColor='#C2E3ED' />
              <p>Carbs: {product.nutrition.carbs}</p>
            </div>

            {/* Fat Progress Bar */}
            <div className="progress-bar">
              <Line percent={product.nutrition.fat} strokeWidth="5" strokeColor="#d9534f" trailWidth="5" trailColor='#EDBAB9' className='fatbar' />
              <p>Fat: {product.nutrition.fat}</p>
            </div>
            
          </div>
        </div>
        
        {isPopupVisible && (
          <div className="popup-box">
            <button className="button" /*onClick={handleAddToGoal} */aria-label="Add to goal">
              <FontAwesomeIcon icon={faPlus} />
              Add
            </button>
            <button className='button' /*onClick={handleDeleteFromGoal} */aria-label="Delete from goal">Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
