import { useParams } from 'react-router';

import { useColors } from '../providers/ColorProvider';

const ColorDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { colors } = useColors();

  const foundColor = colors.find((color) => color.id === id);

  return (
    <div>
      <div
        style={{
          backgroundColor: foundColor?.color,
          height: 100,
          widows: 100,
        }}
      />
      <h1>{foundColor?.title}</h1>
      <h1>{foundColor?.color}</h1>
    </div>
  );
};

export { ColorDetails };
