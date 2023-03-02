import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AddColorForm } from './components/AddColorForm';
import { ColorList } from './components/ColorList';
import colorData from './data/color-data.json';

export const App = () => {
  const [colors, setColors] = useState(colorData);

  return (
    <>
      <AddColorForm
        onNewColor={(title, color) => {
          const newColors = [
            ...colors,
            {
              id: uuidv4(),
              rating: 0,
              title,
              color,
            },
          ];
          setColors(newColors);
        }}
      />
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
    </>
  );
};
