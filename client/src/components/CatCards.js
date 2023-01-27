import React from "react";
import { useEffect, useState } from "react";
import { useFetchDataFromBackend } from "../utils/useFetchDataFromBackend";
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";

import {
  Stack,
  Typography,
  Box,
  ImageListItem,
  ImageList,
  ImageListItemBar,
  IconButton,
  Button,
} from "@mui/material";

const CatCards = ({ breeds, loading }) => {
  //State that handles the limit of the results
  const [limit, setLimit] = useState(5);

  //Slice the result to limited search
  const limitedData = breeds.slice(0, limit);

  // Handle see more button when clicked
  const handleSeeMore = () => {
    setLimit(limit + 3);
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        alignItems: "center",
        ml: "10%",
        mt: "15px",
      }}
    >
      <Typography variant="h4" sx={{ fontFamily: "Righteous" }}>
        Fetching cute kitties names and photos
      </Typography>

      <ImageList sx={{ width: "90%", alignITems: "center" }}>
        {!loading &&
          limitedData.map((breed) => (
            <Link to={`/breeds/${breed.id}`} key={breed.id}>
              <ImageListItem style={{ height: "100%" }}>
                <img
                  src={`${breed.image}?w=48&fit=crop&auto=format`}
                  alt={breed.name}
                  loading="lazy"
                  style={{ borderRadius: "5%" }}
                />

                <ImageListItemBar
                  title={breed.name}
                  subtitle={breed.origin}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${breed.name}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            </Link>
          ))}
      </ImageList>

      <Box>
        {!loading && (
          <Button sx={{ fontSize: "30px" }} onClick={handleSeeMore}>
            See More
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default CatCards;

/* <ul key={breed.id}>
            <li>
              <Link to={`/breeds/${breed.id}`}>
                <strong>{breed.name}</strong>
              </Link>
            </li>
            <img src={breed.image} alt="cat-Image" />
          </ul> */
