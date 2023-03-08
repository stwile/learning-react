import data from '../data/recipe.json';

import { Menu } from './Menu';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Menu',
  component: Menu,
} satisfies Meta<typeof Menu>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    recipes: data,
  },
};
