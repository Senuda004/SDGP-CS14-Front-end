import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      {/* Loop through each product and create a ProductCard component */}
      {products.map(product => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <p>Calories per serving: {product.nutrition.calories_per_serving}</p>
      <p>Protein: {product.nutrition.protein}</p>
      <p>Carbs: {product.nutrition.carbs}</p>
      <p>Fat: {product.nutrition.fat}</p>
      {/* Display image using the src attribute */}
      <img src={product.image} alt={product.name} />
    </div>
  );
};

export default ProductList;
