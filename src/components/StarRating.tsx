import { useState } from 'react';
import { Star } from './Star';

type Props = {
  totalStars: number;
};

const StarRating = ({ totalStars = 5 }: Props) => {
  const [selectedStars, setSelectedStars] = useState<number>(0);

  return (
    <>
      {[...Array(totalStars).keys()].slice(0).map((i) => (
        <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
};

export { StarRating };
