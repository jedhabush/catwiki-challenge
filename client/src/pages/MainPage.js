import React from "react";
import axios from "axios";
import Searchbar from "../components/Searchbar";
import CatCards from "../components/CatCards";

import { useEffect, useState } from "react";
import { useFetchDataFromBackend } from "../utils/useFetchDataFromBackend";
import { Link } from "react-router-dom";
import { Stack, Typography, Box } from "@mui/material";
import { fontSize } from "@mui/system";

const MainPage = () => {
  /* //State that handles the limit of the results
  const [limit, setLimit] = useState(1); */

  const { data, loading, error } = useFetchDataFromBackend(`breeds`);
  const [breeds, setBreeds] = useState([]);

  //Verify the data is loading before setting the breeds state
  useEffect(() => {
    if (!loading && data) {
      setBreeds(data.list);
    }
  }, [data, loading]);

  if (loading) {
    return (
      <Box sx={{ height: "100vh" }}>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Righteous",
            fontSize: "50px",
          }}
          p={5}
        >
          Loading kitties...
        </Typography>
      </Box>
    );
  }
  // This is coming from the useFetchDataFromBackend and show error if there's any
  if (error) {
    return <p>{error.message}</p>;
  }

  /* // Handle see more button when clicked
  const handleSeeMore = () => {
    setLimit(limit + 3);
  };

  //Slice the result to limited search
  const limitedData = breeds.slice(0, limit); */
  return (
    <Box>
      <Searchbar />
      <br />
      <CatCards breeds={breeds} loading={loading} />

      {/* <div>
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
      </div> */}
    </Box>
  );
};

export default MainPage;
