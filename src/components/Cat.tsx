type Props = {
  name: string;
};

const Cat = ({ name }: Props) => {
  console.log(`rendering ${name}`);

  return <p>{name}</p>;
};

export { Cat };
