import { useFetchDataFromBackend } from "../utils/useFetchDataFromBackend";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Stack, Typography, Box, Rating } from "@mui/material";

const CatDetails = () => {
  const [breed, setBreeds] = useState({});
  const { name } = useParams();
  const { data, loading, error } = useFetchDataFromBackend(`breeds/${name}`);

  //Verify the data is loading before setting the breeds state
  useEffect(() => {
    if (!loading && data) {
      setBreeds(data[0]);
    }
  }, [data, loading, name]);

  // This is coming from the useFetchDataFromBackend and show error if there's any
  if (error) {
    return <p>{error.message}</p>;
  }

  console.log(data[0], "DATA ON CatDETAILS");
  return (
    <Box>
      <Typography
        variant="h2"
        mt="48px"
        mb="10px"
        textAlign="center"
        width="100%"
      >
        {breed.name}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img src={breed.image} alt="cat" width="500" height="600" />
      </Box>

      <Typography
        mb={1}
        mt="41px"
        ml="50px"
        mr="50px"
        variant="h6"
        sx={{ fontSize: { lg: "24px", xs: "17px" } }}
        textAlign="center"
      >
        {breed.description}
      </Typography>
      <Box>
        <Typography
          mb={1}
          variant="h5"
          sx={{ fontSize: { lg: "28px", xs: "20px" } }}
          mt="41px"
          textAlign="center"
        >
          <strong>Temperament: </strong>
          {breed.temperament}
        </Typography>
        <Typography
          mb={1}
          variant="h5"
          sx={{ fontSize: { lg: "28px", xs: "20px" } }}
          mt="41px"
          textAlign="center"
        >
          <strong>Origin:</strong> {breed.origin}
        </Typography>
        <Typography
          mb={1}
          variant="h5"
          sx={{ fontSize: { lg: "28px", xs: "20px" } }}
          mt="41px"
          textAlign="center"
        >
          <strong>Life Span:</strong> {breed.life_span} Years
        </Typography>
        <Typography
          mb={1}
          variant="h5"
          sx={{ fontSize: { lg: "28px", xs: "20px" } }}
          mt="41px"
          textAlign="center"
        >
          <strong>Adaptability:</strong>{" "}
          <Rating name="read-only" value={breed.adaptability} readOnly />
        </Typography>
        <Typography
          mb={1}
          variant="h5"
          sx={{ fontSize: { lg: "28px", xs: "20px" } }}
          mt="41px"
          textAlign="center"
        >
          <strong>Affection Level:</strong>{" "}
          <Rating name="read-only" value={breed.affection_level} readOnly />
        </Typography>
        <Typography
          mb={1}
          variant="h5"
          sx={{ fontSize: { lg: "28px", xs: "20px" } }}
          mt="41px"
          textAlign="center"
        >
          <strong>Child-friendly:</strong>{" "}
          <Rating name="read-only" value={breed.child_friendly} readOnly />
        </Typography>
        <Typography
          mb={1}
          variant="h5"
          sx={{ fontSize: { lg: "28px", xs: "20px" } }}
          mt="41px"
          textAlign="center"
        >
          <strong> Grooming:</strong>
          <Rating name="read-only" value={breed.grooming} readOnly />
        </Typography>
        <Typography
          mb={1}
          variant="h5"
          sx={{ fontSize: { lg: "28px", xs: "20px" } }}
          mt="41px"
          textAlign="center"
        >
          <strong> Intelligence:</strong>{" "}
          <Rating name="read-only" value={breed.intelligence} readOnly />
        </Typography>
        <Typography
          mb={2}
          variant="h5"
          sx={{ fontSize: { lg: "28px", xs: "20px" } }}
          mt="41px"
          pb="10px"
          textAlign="center"
        >
          <strong>Health Issues:</strong>{" "}
          <Rating name="read-only" value={breed.health_issues} readOnly />
        </Typography>
      </Box>
    </Box>
  );
};

export default CatDetails;
