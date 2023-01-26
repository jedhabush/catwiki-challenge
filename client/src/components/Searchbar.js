import React from "react";
import { useEffect, useState } from "react";
import { useFetchDataFromBackend } from "../utils/useFetchDataFromBackend";
import { Link } from "react-router-dom";
import { Stack, Typography, Box, TextField, Button } from "@mui/material";

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
    <Box textAlign="center">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          sx={{ width: "50%", mt: "15px" }}
          id="standard-basic"
          label="Searchbar"
          variant="standard"
          type="text"
          placeholder="Search for a kitty cat breed"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          sx={{ mt: "15px", ml: "5px", backgroundColor: "pink" }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box>
        {breeds.map((breed) => (
          <ul key={breed.id} style={{ listStyle: "none" }}>
            <li>
              <Link
                to={`/breeds/${breed.id}`}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "40px",
                    fontFamily: "Righteous",
                  }}
                >
                  {breed.name}
                </Typography>
              </Link>
              <Typography
                sx={{
                  ml: "70px",
                  mr: "70px",
                  fontSize: "20px",
                  fontFamily: "EB Garamond",
                }}
              >
                {breed.description}
              </Typography>
            </li>
            <Box mt="18px">
              <img src={breed.image} alt="cat-Image" width="400" height="400" />
            </Box>
          </ul>
        ))}
      </Box>
    </Box>
  );
};

export default Searchbar;
