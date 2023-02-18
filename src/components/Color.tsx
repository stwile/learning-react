import { StarRating } from './StarRating';

import type { ColorType } from '~/src/types';

type Props = ColorType;

const Color = ({ title, color, rating }: Props) => (
  <section>
    <h1>{title}</h1>
    <div style={{ height: 50, backgroundColor: color }} />
    <StarRating selectedStars={rating} />
  </section>
);

export { Color };
