import { useColors } from '../providers/ColorProvider';

import { Color } from './Color';

const ColorList = () => {
  const { colors } = useColors();
  if (!colors.length) return <div>No Colors Listed.</div>;

  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          color={color.color}
          title={color.title}
          rating={color.rating}
          id={color.id}
        />
      ))}
    </div>
  );
};

export { ColorList };
