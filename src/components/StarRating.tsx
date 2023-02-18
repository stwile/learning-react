import { useState } from 'react';
import { Star } from './Star';

type Props = {
  totalStars: number;
};

const StarRating = ({ totalStars = 5 }: Props) => {
  const [selectedStars] = useState(3);

  return (
    <>
      {[...Array(totalStars).keys()].slice(0).map((i) => (
        <Star key={i} selected={selectedStars > i} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
};

export { StarRating };
