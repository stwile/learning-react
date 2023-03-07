import { useState } from 'react';

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const useInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);

  const props: Props = {
    value,
    onChange: (e) => setValue(e.target.value),
  };

  const reset = () => setValue(initialValue);

  return { props, reset };
};

export { useInput };
