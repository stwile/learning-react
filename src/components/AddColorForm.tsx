import { useRef } from 'react';

type Props = {
  onNewColor: (title: string, color: string) => void;
};

const AddColorForm = ({ onNewColor }: Props) => {
  const txtTile = useRef<HTMLInputElement>(null);
  const hexColor = useRef<HTMLInputElement>(null);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = txtTile.current?.value ?? '';
    const color = hexColor.current?.value ?? '';

    onNewColor(title, color);
    if (txtTile.current !== null) {
      txtTile.current.value = '';
    }
    if (hexColor.current !== null) {
      hexColor.current.value = '';
    }
  };

  return (
    <form onSubmit={submit}>
      <input ref={txtTile} type="text" placeholder="color title..." required />
      <input ref={hexColor} type="color" required />
      <button type="submit">ADD</button>
    </form>
  );
};

export { AddColorForm };
