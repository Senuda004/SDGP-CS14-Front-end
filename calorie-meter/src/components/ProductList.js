import React, { useState } from 'react';
import './productList.css';
import { Line } from 'rc-progress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';


const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {/* Loop through each product and create a ProductCard component */}
      {products.map(product => (
        <ProductCard 
        key={product.name}
        product={product} 
        onAddToGoal={onAddToGoal}
        onDeleteFromGoal={onDeleteFromGoal}/>
      ))}
    </div>
  );
};


const ProductCard = ({ product, onAddToGoal, onDeleteFromGoal }) => {  
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const handleAddToGoal = () => {
    onAddToGoal(product.nutrition.caloriesPerServing);
    togglePopup(); // Close popup after adding to goal
  };

  const handleDeleteFromGoal = () => {
    onDeleteFromGoal(product.nutrition.caloriesPerServing);
    togglePopup(); // Close popup after deleting from goal
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
            <button className="button" onClick={handleAddToGoal}>
              <FontAwesomeIcon icon={faPlus} />
              Add
            </button>
            <button className='button' onClick={handleDeleteFromGoal}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
