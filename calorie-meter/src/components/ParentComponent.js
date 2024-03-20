import React, { useState, useEffect } from 'react';
import CircBar from './CircBar'; // Import CircBar component
import ProductList from './ProductList';

const ParentComponent = () => {
  const [goal, setGoal] = useState(5000);
  const [consumed, setConsumed] = useState(0);
  const [products, setProducts] = useState([]);
  const [newGoal, setNewGoal] = useState(0);
  const [updatedConsumed, setUpdatedConsumed] = useState(0);

  useEffect(() => {
    fetch('/productList.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const updateGoalAndConsumed = (newGoalValue, updatedConsumedValue) => {
    setNewGoal(newGoalValue);
    setUpdatedConsumed(updatedConsumedValue);
  };

  return (
    <div>
      <CircBar updateGoalAndConsumed={updateGoalAndConsumed} />

      <ProductList products={products} consumed={consumed} newGoal={newGoal} updatedConsumed={updatedConsumed} />
      {/* Additional components or logic */}
    </div>
  );
};

export default ParentComponent;
