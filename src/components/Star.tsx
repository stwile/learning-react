import { FaStar } from 'react-icons/fa';

type Props = {
  selected: boolean;
};

const Star = ({ selected = false }: Props) => (
  <FaStar color={selected ? 'red' : 'grey'} />
);

export { Star };
