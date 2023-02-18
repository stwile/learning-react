import { FaStar } from 'react-icons/fa';

type Props = {
  selected: boolean;
  onSelect: () => void;
};

const Star = ({ selected = false, onSelect }: Props) => (
  <FaStar color={selected ? 'red' : 'grey'} onClick={() => onSelect()} />
);

export { Star };
