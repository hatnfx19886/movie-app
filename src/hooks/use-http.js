import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendRequest = useCallback(async (url, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://api.themoviedb.org/3${url}`);
      if (!res.ok) {
        throw new Error("Request failed!");
      }
      const data = await res.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Some thing went wrong!");
    }
    setIsLoading(false);
  }, []);
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
