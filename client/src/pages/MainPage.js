import React from "react";
import axios from "axios";
import Searchbar from "../components/Searchbar";
import { useEffect, useState } from "react";
import { useFetchDataFromBackend } from "../utils/useFetchDataFromBackend";
import { Link } from "react-router-dom";

const MainPage = () => {
  //State that handles the limit of the results
  const [limit, setLimit] = useState(1);

  const { data, loading, error } = useFetchDataFromBackend(`breeds`);
  const [breeds, setBreeds] = useState([]);

  //Verify the data is loading before setting the breeds state
  useEffect(() => {
    if (!loading && data) {
      setBreeds(data.list);
    }
  }, [data, loading]);

  // This is coming from the useFetchDataFromBackend and show error if there's any
  if (error) {
    return <p>{error.message}</p>;
  }

  // Handle see more button when clicked
  const handleSeeMore = () => {
    setLimit(limit + 3);
  };

  //Slice the result to limited search
  const limitedData = breeds.slice(0, limit);
  return (
    <div>
      <Searchbar />
      <br />
      <div>
        <p>Fetching Cats names and photos</p>
        {!loading &&
          limitedData.map((breed) => (
            <ul key={breed.id}>
              <li>
                <Link to={`/breeds/${breed.id}`}>
                  <strong>{breed.name}</strong>
                </Link>
              </li>
              <img src={breed.image} alt="cat-Image" />
            </ul>
          ))}

        <button onClick={handleSeeMore}>See More</button>
      </div>
    </div>
  );
};

export default MainPage;
