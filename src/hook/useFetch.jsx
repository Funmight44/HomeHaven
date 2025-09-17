import { useEffect, useState } from "react";

// Generic hook that can fetch *any* type of data
const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(endpoint);
      const json = await response.json();
      setData(json);
      setLoading(false);
    }
    fetchData();
  }, [endpoint]);

  return { data, loading};
};

export default useFetch;
