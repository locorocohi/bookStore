import type { DependencyList } from 'react';
import { useEffect, useCallback } from 'react';

type EffectType = () => void;

export const useDebounce = (effect: EffectType, dependencies: DependencyList, delay: number) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
};
