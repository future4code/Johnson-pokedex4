import axios from "axios";
import { useEffect, useState } from "react";

export const useRequestData = (url) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [url]);

  return [data, isLoading, error];
};
