import { FaStar } from 'react-icons/fa';

type Props = {
  selected?: boolean;
};

const Star = ({ selected = false }: Props) => (
  <>
    <h1>Great Star</h1>
    <FaStar id="star" color={selected ? 'red' : 'grey'} />
  </>
);

export { Star };
