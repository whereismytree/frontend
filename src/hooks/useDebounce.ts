import { useEffect, useRef, useState } from 'react';

const useDebounce = <T>(initialState: T, timeout = 500) => {
  const [data, setData] = useState<T>(initialState);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const watch = (data: T) => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setData(data);
    }, timeout);
  };

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return { data, watch };
};

export default useDebounce;
