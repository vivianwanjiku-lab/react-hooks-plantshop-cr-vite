import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants, allPlants }) {
  const handleStockToggle = (plantId, currentInStock) => {
    const updatedAllPlants = allPlants.map((plant) =>
      plant.id === plantId ? { ...plant, in_stock: !currentInStock } : plant,
    );
    setPlants(updatedAllPlants);
  };

  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onStockToggle={() => handleStockToggle(plant.id, plant.in_stock)}
        />
      ))}
    </ul>
  );
}

export default PlantList;
