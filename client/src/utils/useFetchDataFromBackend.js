import axios from "axios";
import axiosRetry from "axios-retry";
import { useState, useEffect } from "react";

axiosRetry(axios, { retries: 3 });

const BASE_URL = "https://catwikipage-api.onrender.com";

/*
A custom hook to handle API calls and can be used anywhere in the application 
and implement a separation of concern and most importantly is to not repeat myself. Calling 
few end points is needed througout the application and by implementing a custom hook I can 
produce a cleaner code
*/
export const useFetchDataFromBackend = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/${url}`)
      .then(({ data }) => {
        setData(data);

        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        //--- Measurements to be taken if API call fails 3 times, use dummyData instead---//
        if (error.isRetryable) {
          console.log("Error: Retrying...");
        }
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};
