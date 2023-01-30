import React from "react";
import CatCards from "../components/CatCards";

import { useEffect, useState } from "react";
import { useFetchDataFromBackend } from "../utils/useFetchDataFromBackend";

import { Typography, Box } from "@mui/material";

const MainPage = () => {
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
  // This is coming from the useFetchDataFromBackend and show any backend error if there's any
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Box>
      <CatCards breeds={breeds} loading={loading} />
    </Box>
  );
};

export default MainPage;
