//import logo from './logo.svg';
import './App.css';
import CircBar from './components/CircBar';
import ProductList from './components/ProductList';
import React, { useEffect, useState } from 'react';





const App = () => {
  const [productsData, setProductsData] = useState(null);

  useEffect(() => {
    // Fetch the product data from the data.json file in the public folder
    fetch('/productList.json')
      .then(response => response.json())
      .then(data => setProductsData(data))
      .catch(error => console.error('Error fetching product data:', error));
  }, []);

  
  return (
    <div className="App">
      <CircBar/>
      {productsData && <ProductList products={productsData.products} />}
     
          
    </div>
    
    
  );
}

export default App;


