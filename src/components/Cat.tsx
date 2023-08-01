type Props = {
  name: string;
  meow: (name: string) => void;
};

const Cat = ({ name, meow }: Props) => {
  console.log(`rendering ${name}`);

  return (
    <button type="button" onClick={() => meow(name)}>
      {name}
    </button>
  );
};

export { Cat };
