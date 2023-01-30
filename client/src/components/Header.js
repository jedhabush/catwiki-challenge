import React from "react";
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box
      width="100%"
      pb={5}
      sx={{
        backgroundColor: "#585e6e",

        textAlign: "center",
      }}
    >
      <Box
        sx={{
          pt: "10px",
        }}
      >
        <Link to="/">
          <img
            src="https://thecatapi.com/favicon.ico"
            alt="logo"
            height="50px"
          />
        </Link>

        <Typography
          sx={{
            mt: "10px",
            fontFamily: "Righteous",
            fontSize: "30px",
          }}
        >
          CatWiki
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
