import { useEffect, useState } from 'react';

const useCounter = (initValue, iteratee) => {
  const [counter, setCounter] = useState(initValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + iteratee);
    }, 1000);

    return () => clearInterval(interval);
  }, [iteratee]);

  return counter;
};

export default useCounter;
