import React from "react";
import { useEffect, useState } from "react";
import { useFetchDataFromBackend } from "../utils/useFetchDataFromBackend";

const Searchbar = () => {
  const [breeds, setBreeds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, error } = useFetchDataFromBackend(
    `breeds/${searchTerm}`
  );

  const handleSearch = () => {
    if (!searchTerm) {
      return;
    } else {
      setBreeds(data);
      setSearchTerm(""); // Clears the searchTerm state variable
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a cat breed"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {breeds.map((breed) => (
        <ul key={breed.id}>
          <li>
            <strong>{breed.name}</strong> {" : "} {breed.description}
          </li>
          <img src={breed.image} alt="cat-Image" />
        </ul>
      ))}
    </div>
  );
};

export default Searchbar;
