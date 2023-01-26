import axios from "axios";
import asyncHndler from "express-async-handler";
import { API_KEY, breedsEndPoint, searchEndPoint } from "../utils/config.js";
import { catData, catId } from "../utils/fetchData.js";

/*
Note:
In big code-base project, I beleive creating a controller for each endpoint is 
best practice for easy debugging and handling but for the sake of this argument 
I will be putting them all in one file
*/
// Use BreedsEndPoint to get all breeds
const catBreeds = asyncHndler(async (req, res) => {
  const { data } = await axios.get(breedsEndPoint, {
    headers: { "x-api-key": API_KEY },
  });
  const dataList = await Promise.all(catData(data));
  return res.json({ list: dataList });
});

// Get all Breeds name data
const allBreeds = asyncHndler(async (req, res) => {
  const { data } = await axios.get(breedsEndPoint, {
    headers: { "x-api-key": API_KEY },
  });
  const dataList = await Promise.all(catId(data));
  return res.json(dataList);
});

// Use searchEndPoint to get single breed name
const breedsName = asyncHndler(async (req, res) => {
  const { name } = req.params;
  const { data } = await axios.get(searchEndPoint, {
    headers: {
      "x-api-key": API_KEY,
    },
    params: {
      q: name,
    },
  });
  const dataList = await Promise.all(catData(data));
  return res.json(dataList);
});

export { breedsName, catBreeds, allBreeds };
