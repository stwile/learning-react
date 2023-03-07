import { useInput } from '../hooks/useInput';
import { useColors } from '../providers/ColorProvider';

const AddColorForm = () => {
  const { props: titleProps, reset: resetTitle } = useInput('');
  const { props: colorProps, reset: resetColor } = useInput('#000000');
  const { addColor } = useColors();

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
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
