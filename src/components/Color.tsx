import { FaTrash } from 'react-icons/fa';

import { StarRating } from './StarRating';

import type { OnRateColor, OnRemoveColor } from './ColorList';
import type { ColorType } from '~/src/types';

type Props = ColorType & {
  onRemove: OnRemoveColor;
  onRate: OnRateColor;
};

const Color = ({ id, title, color, rating, onRemove, onRate }: Props) => (
  <section>
    <h1>{title}</h1>
    <button type="button" onClick={() => onRemove(id)}>
      <FaTrash />
    </button>
    <div style={{ height: 50, backgroundColor: color }} />
    <StarRating selectedStars={rating} onRate={() => onRate(id, rating)} />
  </section>
);

export { Color };
