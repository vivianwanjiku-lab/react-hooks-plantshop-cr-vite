import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({
  plants,
  searchTerm,
  setSearchTerm,
  setPlants,
  allPlants,
}) {
  return (
    <main>
      <NewPlantForm setPlants={setPlants} allPlants={allPlants} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList plants={plants} setPlants={setPlants} allPlants={allPlants} />
    </main>
  );
}

export default PlantPage;
