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
        const dataArr = response.data;
        setIsLoading(false);
        setData(dataArr);
      } catch (error) {
        setIsLoading(false);
        if (axios.isAxiosError(error)) {
          throw new Error(error);
        } else {
          throw new Error(error);
        }
      }
    };
    fetchApiData();
  }, []);
  return [isLoading, data];
};

export default useFetch;
