import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, params) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await axios.get(url, {
          params,
        });
        console.log("response is", response);
        const dataArr = response.data;
        setIsLoading(false);
        setData(dataArr);
      } catch (error) {
        setIsLoading(false);
        if (axios.isAxiosError(error)) {
          console.error("Axios Error:", error.message);
          throw new Error(error);
        } else {
          console.error("Network Error:", error);
          throw new Error(error);
        }
      }
    };
    fetchApiData();
  }, []);
  return [isLoading, data];
};

export default useFetch;
