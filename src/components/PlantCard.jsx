import React, { useState } from "react";

function PlantCard({ plant, onStockToggle }) {
  const [isInStock, setIsInStock] = useState(plant.in_stock !== false);

  const handleToggle = () => {
    setIsInStock(!isInStock);
    onStockToggle();
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleToggle}>
          In Stock
        </button>
      ) : (
        <button onClick={handleToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
