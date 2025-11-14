// useFetchFlats.js (React hook example)
import { useEffect, useState } from "react";
import { fetchFlats } from "../api-client/flatsApi";

/**
 * Simple hook to fetch flats with loading/error states.
 * Usage:
 *  const { data, loading, error, refetch } = useFetchFlats({ location: "College Road" });
 */
export default function useFetchFlats(params = {}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = async (p = params) => {
    setLoading(true);
    setError(null);
    const res = await fetchFlats(p);
    if (res.success) setData(res.data);
    else setError(res.error);
    setLoading(false);
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error, refetch: load };
}
