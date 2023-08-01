import { useCallback, useMemo, useState } from 'react';

const useIterator = <T>(
  items: T[] = [],
  initialValue = 0,
): [T, () => void, () => void] => {
  const [i, setIndex] = useState(initialValue);

  const prev = useCallback(() => {
    if (i === 0) return setIndex(items.length - 1);

    return setIndex(i - 1);
  }, [i]);

  const next = useCallback(() => {
    if (i === items.length - 1) return setIndex(0);

    return setIndex(i + 1);
  }, [i]);

  const item = useMemo(() => items[i], [i]);

  return [item || items[0], prev, next];
};

export { useIterator };
