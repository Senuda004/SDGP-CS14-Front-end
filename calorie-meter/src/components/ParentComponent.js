// In the parent component that renders both ProductList and CircularProgressBar
import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import CircularProgressBar from './CircularProgressBar';

const ParentComponent = () => {
  // Define the initial goal and consumed values
  const [goal, setGoal] = useState(5000); // Example initial goal value
  const [consumed, setConsumed] = useState(0); // Example initial consumed value
  const [products, setProducts] = useState([]); // State to store products data


  // Function to update goal when adding calories
  const addToGoal = (calories) => {
    setGoal(prevGoal => prevGoal - calories);
  };

  // Function to update goal when deleting calories
  const deleteFromGoal = (calories) => {
    setGoal(prevGoal => prevGoal + calories);
  };

  return (
    <div>
      {/* Render the ProductList component and pass necessary props */}
      <ProductList
        products={products} 
        onAddToGoal={addToGoal}
        onDeleteFromGoal={deleteFromGoal}
      />
      {/* Render the CircularProgressBar component and pass necessary props */}
      <CircularProgressBar
        goal={goal}
        consumed={consumed}
        onConsumedChange={setConsumed}
      />
    </div>
  );
};

export default ParentComponent;
