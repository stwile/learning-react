import { useReducer } from 'react';

const Numbers = () => {
  const [number, setNumber] = useReducer(
    (number1: number, newNumber: number) => number1 + newNumber,
    0,
  );

  return (
    <button type="button" onClick={() => setNumber(1)}>
      {number}
    </button>
  );
};

export { Numbers };
