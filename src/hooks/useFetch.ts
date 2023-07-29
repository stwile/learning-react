import { useEffect, useState } from 'react';

const useFetch = <T>(
  uri: string,
): {
  loading: boolean;
  data: T | null;
  error?: Error;
} => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!uri) return;
    fetch(uri)
      .then((res) => res.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  return {
    loading,
    data,
    error,
  };
};

export { useFetch };
