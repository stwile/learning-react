import { useInput } from '../hooks/useInput';

type Props = {
  onNewColor: (title: string, color: string) => void;
};

const AddColorForm = ({ onNewColor }: Props) => {
  const { props: titleProps, reset: resetTitle } = useInput('');
  const { props: colorProps, reset: resetColor } = useInput('#000000');

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input
        value={titleProps.value}
        onChange={titleProps.onChange}
        type="text"
        placeholder="color title..."
        required
      />
      <input
        value={colorProps.value}
        onChange={colorProps.onChange}
        type="color"
        required
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export { AddColorForm };
