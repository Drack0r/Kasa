import { useState, useEffect } from "react";
import { TIMEOUTS } from "../config/api";

export function useFetch(dataSrc) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Délai artificiel pour voir le loader
        // await new Promise((resolve) =>
        //   setTimeout(resolve, TIMEOUTS.LOADING_DELAY)
        // );

        const response = await fetch(dataSrc);

        if (!response.ok) {
          throw new Error(`HTTP error ! status : ${response.status}`);
        }

        const result = await response.json();

        if (isMounted) {
          setData(result);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
          console.error("Fetch error:", error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [dataSrc]);

  return { data, loading, error };
}
