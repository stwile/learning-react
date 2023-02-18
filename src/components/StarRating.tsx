import { Star } from './Star';

type Props = {
  totalStars?: number;
  selectedStars: number;
};

const StarRating = ({ totalStars = 5, selectedStars = 0 }: Props) => (
  <>
    {[...Array(totalStars).keys()].slice(0).map((i) => (
      <Star key={i} selected={selectedStars > i} />
    ))}
    <p>
      {selectedStars} of {totalStars} stars
    </p>
  </>
);

export { StarRating };
