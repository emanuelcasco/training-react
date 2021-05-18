import { useCallback, useState } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);

  const sendRequest = useCallback(
    async ({ url: requestUrl, ...requestConfig }, transformData) => {
      try {
        setIsLoading(true);
        setHttpError(null);
        const response = await fetch(requestUrl, {
          method: requestConfig.method ?? 'GET',
          headers: requestConfig.headers ?? {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });
        if (!response.ok) throw new Error('Request failed!');
        const data = await response.json();
        transformData && transformData(data);
      } catch (err) {
        setHttpError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    },
    []
  );
  return { isLoading, httpError, sendRequest };
};

export default useHttp;
