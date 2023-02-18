import { useState } from 'react';

import { ColorList } from './components/ColorList';
import colorData from './data/color-data.json';

export const App = () => {
  const [colors, setColors] = useState(colorData);

  return (
    <ColorList
      colors={colors}
      onRemoveColor={(id: string) => {
        setColors(colors.filter((color) => color.id !== id));
      }}
      onRateColor={(id, rating) =>
        setColors(
          colors.map((color) => {
            if (color.id === id)
              return {
                ...color,
                rating,
              };

            return color;
          }),
        )
      }
    />
  );
};
