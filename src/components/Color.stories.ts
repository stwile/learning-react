import data from '../data/color-data.json';

import { Color } from './Color';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Color',
  component: Color,
} satisfies Meta<typeof Color>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Max: Story = {
  args: {
    id: data[0].id,
    title: data[0].title,
    color: data[0].color,
    rating: data[0].rating,
  },
};

export const Three: Story = {
  args: {
    id: data[1].id,
    title: data[1].title,
    color: data[1].color,
    rating: data[1].rating,
  },
};

export const Zero: Story = {
  args: {
    id: data[2].id,
    title: data[2].title,
    color: data[2].color,
    rating: data[2].rating,
  },
};
