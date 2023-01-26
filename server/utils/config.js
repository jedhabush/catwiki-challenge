import dotenv from "dotenv";
dotenv.config();
// Setting up needed configurations and URLs
const API_KEY = process.env.API_KEY || "";
const breedsEndPoint = "https://api.thecatapi.com/v1/breeds";
const imagesEndPoint = "https://api.thecatapi.com/v1/images/search";
const searchEndPoint = "https://api.thecatapi.com/v1/breeds/search";

export { API_KEY, breedsEndPoint, searchEndPoint, imagesEndPoint };
