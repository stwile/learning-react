import { useState } from 'react';

import { Cat } from './Cat';

const Cats = () => {
  const [cats, setCats] = useState<string[]>(['Biscuit', 'Jungle', 'Outlow']);

  return (
    <>
      {cats.map((name, i) => (
        <Cat key={i} name={name} />
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
