import { useEffect, useState } from "react";

// Generic hook that can fetch *any* type of data
const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try{
            const response = await fetch(endpoint);
            if(!response.ok) throw new Error('Network response was not ok');
            const json = await response.json();
            setData(json);
            setLoading(false);
      }catch(error){
        setError(error.message)
        setLoading(false)
      }
      
    }
    fetchData();
  }, [endpoint]);

  return { data, loading, error};
};

export default useFetch;
