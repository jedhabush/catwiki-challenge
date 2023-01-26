import dotenv from "dotenv";
import path from "path";
import express from "express";
import breedsRoute from "./routes/breedsRoute.js";
import cors from "cors";

const PORT = process.env.PORT || 3500;

const app = express();
dotenv.config();

app.get("/api", (req, res) => {
  res.json({ message: "Page is OK and running" });
});

//middlewares and http setup
app.use(express.json());
app.use(cors());
app.use("/api/breeds/", breedsRoute);

// handle error requests
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong try again later!";
  return res.status(errorStatus).json({
    sucess: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
// Port is listening
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
