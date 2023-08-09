import { useNavigate } from 'react-router-dom';

import { useColors } from '../providers/ColorProvider';

import { StarRating } from './StarRating';

import type { ColorType } from '~/src/types';

type Props = ColorType;

const Color = ({ id, title, color, rating }: Props) => {
  const { rateColor, removeColor } = useColors();
  const navigate = useNavigate();

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <section className="color" onClick={() => navigate(`/${id}`)}>
      <h1>{title}</h1>
      <button type="button" onClick={() => removeColor(id)}>
        X
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStars={rating} onRate={() => rateColor(id, rating)} />
    </section>
  );
};

export { Color };
