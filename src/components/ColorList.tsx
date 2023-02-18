import { Color } from './Color';

import type { ColorType } from '~/src/types';

type Props = {
  colors?: ColorType[];
};

const ColorList = ({ colors = [] }: Props) => {
  if (!colors.length) return <div>No Colors Listed.</div>;

  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          color={color.color}
          title={color.title}
          rating={color.rating}
        />
      ))}
    </div>
  );
};

export { ColorList };
