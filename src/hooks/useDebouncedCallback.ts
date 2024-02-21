import { useEffect, useRef } from 'react';

type ElementType<T> = T extends (infer U)[] ? U : never;

type useDebouncedCallback = {
  (func: () => void, delay?: number): () => void;
  <T>(func: (arg: T) => void, delay?: number): (arg: T) => void;
  <T extends any[]>(func: (...args: T) => void, delay?: number): (...args: T) => void;
};

const useDebouncedCallback: useDebouncedCallback = <T>(
  func: (...args: ElementType<T>[]) => void,
  delay = 300,
) => {
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return (...args: any) => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => func(...args), delay);
  };
};

export default useDebouncedCallback;
