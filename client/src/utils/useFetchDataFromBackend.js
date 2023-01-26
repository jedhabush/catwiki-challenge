import axios from "axios";
import axiosRetry from "axios-retry";
import { useState, useEffect } from "react";

axiosRetry(axios, { retries: 3 });

const BASE_URL = "http://localhost:3500/api";

/*
A custom hook to handle API calls and can be used anywhere in the application 
and implement a separation of concern
If code 429 appeared on the screen then that means "too many requests" and reached the request 
limit for the day, So I implemented a backup dummy data if the API call fails at least 3 times. 
By doing so, I enure the service is not interrupted until the API call get fixed or back to service
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
