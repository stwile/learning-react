import { Star } from './Star';

type Props = {
  totalStars?: number;
  selectedStars: number;
  onRate: (i: number) => void;
};

const StarRating = ({ totalStars = 5, selectedStars = 0, onRate }: Props) => (
  <>
    {[...Array(totalStars).keys()].slice(0).map((i) => (
      <Star
        key={i}
        selected={selectedStars > i}
        onSelect={() => onRate(i + 1)}
      />
    ))}
    <p>
      {selectedStars} of {totalStars} stars
    </p>
  </>
);

export { StarRating };
