import { useState } from 'react';
import { Star } from './Star';

type Props = {
  style: {
    backgroundColor: string;
  };
  totalStars: number;
};

const StarRating = ({ style, totalStars = 5 }: Props) => {
  const [selectedStars, setSelectedStars] = useState<number>(0);

  return (
    <div style={{ padding: '5px', ...style }}>
      {[...Array(totalStars).keys()].slice(0).map((i) => (
        <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
};

export { StarRating };
