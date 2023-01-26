import axios from "axios";
import { API_KEY, imagesEndPoint } from "../utils/config.js";

const getCatsImages = async (id) => {
  const response = await axios.get(imagesEndPoint, {
    headers: { "x-api-key": API_KEY },
    breed_ids: id,
  });
  const { data } = response;
  return data;
};

const catData = (catsInfo) => {
  return catsInfo.map(
    async ({
      id,
      name,
      description,
      temperament,
      origin,
      life_span,
      adaptability,
      affection_level,
      child_friendly,
      grooming,
      intelligence,
      health_issues,
      social_needs,
      stranger_friendly,
    }) => {
      const [image] = await getCatsImages(id);
      return {
        id,
        name,
        description,
        temperament,
        origin,
        life_span,
        adaptability,
        affection_level,
        child_friendly,
        grooming,
        intelligence,
        health_issues,
        social_needs,
        stranger_friendly,
        image: image.url,
      };
    }
  );
};
const catId = (catsInfo) => {
  return catsInfo.map(async ({ id, name }) => {
    return { id, name };
  });
};
export { catData, catId };
