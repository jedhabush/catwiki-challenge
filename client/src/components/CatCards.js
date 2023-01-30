import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";

import {
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

  //Slice the data to limited results
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
        Fetching cute kitties breeds
      </Typography>

      <ImageList sx={{ width: "90%", alignITems: "center" }}>
        {/* If not loading the map through limitedData array */}
        {!loading &&
          limitedData.map((breed) => (
            <Link to={`/breeds/${breed.name}`} key={breed.id}>
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
        {/* Display see more button if the data stopped loading */}
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
