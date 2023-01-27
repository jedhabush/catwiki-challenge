import React from "react";
import { Stack, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      width="100%"
      pt={2}
      sx={{
        backgroundColor: "#585e6e",
        textAlign: "center",
      }}
    >
      <Typography>Made with ❤️ by Jed Habush</Typography>
      <Typography>
        Powered By <a href="https://thecatapi.com/">Cat API</a>{" "}
      </Typography>
    </Box>
  );
};

export default Footer;
