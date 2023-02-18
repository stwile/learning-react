import data from '../data/color-data.json';

import { Color } from './Color';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Color> = {
  title: 'Color',
  component: Color,
};
export default meta;

export const Max: StoryObj<typeof Color> = {
  args: {
    title: data[0].title,
    color: data[0].color,
    rating: data[0].rating,
  },
};

export const Three: StoryObj<typeof Color> = {
  args: {
    title: data[1].title,
    color: data[1].color,
    rating: data[1].rating,
  },
};

export const Zero: StoryObj<typeof Color> = {
  args: {
    title: data[2].title,
    color: data[2].color,
    rating: data[2].rating,
  },
};
