import { memo, useCallback, useState } from 'react';

import { Cat } from './Cat';

const Cats = () => {
  const [cats, setCats] = useState<string[]>(['Biscuit', 'Jungle', 'Outlow']);

  const PureCat = memo(
    Cat,
    (prevProps, nextProps) => prevProps.name === nextProps.name,
  );

  const meow = useCallback(
    (name: string) => console.log(`${name} has meowed`),
    [],
  );

  return (
    <>
      {cats.map((name, i) => (
        <PureCat key={i} name={name} meow={meow} />
      ))}
      <button
        type="button"
        onClick={() => setCats([...cats, prompt('Namea cat') ?? ''])}
      >
        Add a cat
      </button>
    </>
  );
};

export { Cats };
