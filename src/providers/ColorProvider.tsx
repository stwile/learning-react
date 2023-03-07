import { createContext, useContext, useState, useMemo } from 'react';
import { v4 } from 'uuid';

import colorData from '../data/color-data.json';

import type { FC, ReactNode } from 'react';
import type { ColorType } from '~/src/types';

type ColorContextType = {
  colors: ColorType[];
  addColor: (title: string, color: string) => void;
  removeColor: (id: string) => void;
  rateColor: (id: string, rating: number) => void;
};

const ColorContext = createContext<ColorContextType>({
  colors: [
    {
      id: '0175d1f0-a8c6-41bf-8d02-df5734d829a4',
      title: 'ocean at dusk',
      color: '#00c4e2',
      rating: 5,
    },
  ],
  addColor: () => null,
  removeColor: () => null,
  rateColor: () => null,
});

const useColors = () => useContext<ColorContextType>(ColorContext);

type Props = { children: ReactNode };

const ColorProvider: FC<Props> = ({ children }) => {
  const [colors, setColors] = useState<ColorType[]>(colorData);

  const addColor = (title: string, color: string) => {
    setColors([...colors, { id: v4(), rating: 0, title, color }]);
  };
  const rateColor = (id: string, rating: number) => {
    setColors(
      colors.map((color) => (color.id === id ? { ...color, rating } : color)),
    );
  };

  const removeColor = (id: string) =>
    setColors(colors.filter((color) => color.id !== id));

  const providerValue = useMemo<ColorContextType>(
    () => ({ colors, addColor, rateColor, removeColor }),
    [colors, addColor, rateColor, removeColor],
  );

  return (
    <ColorContext.Provider value={providerValue}>
      {children}
    </ColorContext.Provider>
  );
};

export { ColorContext, ColorProvider, useColors };
