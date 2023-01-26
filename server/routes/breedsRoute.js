import express from "express";
const router = express.Router();

import {
  breedsName,
  catBreeds,
  allBreeds,
} from "../controllers/breedsController.js";

//Listing all routes and they will be calling thier controllers
/*
I would normally create an individual route for each controller but for the sake of this challenge
They are placed in one file
*/
router.route("/:name").get(breedsName);
router.route("/").get(catBreeds);
router.route("/allbreednames").get(allBreeds);

export default router;
