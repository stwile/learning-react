import { Color } from './Color';

import type { ColorType } from '~/src/types';

type OnRemoveColor = (id: string) => void;
type OnRateColor = (id: string, rating: number) => void;

type Props = {
  colors?: ColorType[];
  onRemoveColor: OnRemoveColor;
  onRateColor: OnRateColor;
};

const ColorList = ({ colors = [], onRemoveColor, onRateColor }: Props) => {
  if (!colors.length) return <div>No Colors Listed.</div>;

  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          color={color.color}
          title={color.title}
          rating={color.rating}
          onRemove={onRemoveColor}
          onRate={onRateColor}
          id={color.id}
        />
      ))}
    </div>
  );
};

export { ColorList };
export type { OnRateColor, OnRemoveColor };
