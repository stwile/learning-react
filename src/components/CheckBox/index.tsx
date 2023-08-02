import { useReducer } from 'react';

const CheckBox = () => {
  const [checked, toggle] = useReducer((checked1) => !checked1, false);

  return (
    <>
      <input type="checkbox" value={Number(checked)} onChange={toggle} />
      {checked ? 'checked' : 'not checked'}
    </>
  );
};

export { CheckBox };
