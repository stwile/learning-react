import { useState } from 'react';

const useIterator = <T>(
  items: T[] = [],
  initialIndex = 0,
): [T, () => void, () => void] => {
  const [i, setIndex] = useState<number>(initialIndex);

  const prev = () => (i === 0 ? setIndex(items.length - 1) : setIndex(i - 1));
  const next = () => (i === items.length - 1 ? setIndex(0) : setIndex(i + 1));

  return [items[i], prev, next];
};

export { useIterator };
