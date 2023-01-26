import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box
      overflow="hidden"
      width="100%"
      p={5}
      sx={{
        backgroundColor: "#585e6e",
        textAlign: "center",
      }}
    >
      <Link to="/">
        <img src="https://thecatapi.com/favicon.ico" alt="logo" />
      </Link>

      <Typography>CatWiki</Typography>
    </Box>
  );
};

export default Header;
