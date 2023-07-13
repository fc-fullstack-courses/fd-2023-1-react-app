import { useEffect, useState } from 'react';

export function useData(getData) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    getData()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading, error };
}

export function useClicker(elemRef) {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const elem = elemRef.current;
    elem.addEventListener('click', handleClick);

    return () => {
      elem.removeEventListener('click', handleClick);
    };
  }, [elemRef]);

  function handleClick() {
    setClicks((oldClicks) => oldClicks + 1);
  }

  return { clicks, handleClick };
}
