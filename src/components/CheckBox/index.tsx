import { useReducer } from 'react';

const CheckBox = () => {
  const [checked, setChecked] = useReducer(
    (checked1: boolean) => !checked1,
    false,
  );
  const labelName = 'checkbox';

  return (
    <label htmlFor={labelName}>
      {checked ? 'checked' : 'not checked'}
      <input
        name={labelName}
        type="checkbox"
        value={Number(checked)}
        onChange={setChecked}
        aria-checked={checked}
      />
    </label>
  );
};

export { CheckBox };
