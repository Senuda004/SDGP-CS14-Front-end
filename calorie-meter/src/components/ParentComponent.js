// ParentComponent.js
import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import CircularProgressBar from './CircularProgressBar';


const ParentComponent = () => {
 // Define the initial goal and consumed values
 const [goal, setGoal] = useState(5000); // Example initial goal value
 const [consumed, setConsumed] = useState(0); // Example initial consumed value
 const [products, setProducts] = useState([]);

 const handleConsumedChange = (newConsumed) => {
  setConsumed(newConsumed);
};
useEffect(() => {
  // Example fetch request
  fetch('/productList.json')
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => console.error('Error fetching products:', error));
}, []);


return (
  <div>
    <CircularProgressBar goal={goal} consumed={consumed} onConsumedChange={handleConsumedChange} />
    <ProductList products={products} goal={goal} consumed={consumed} onConsumedChange={handleConsumedChange} />
    {/* Additional components or logic */}
  </div>
);
};

export default ParentComponent;