import data from '../data/recipe.json';

import { Menu } from './Menu';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Menu> = {
  title: 'Menu',
  component: Menu,
};
export default meta;

export const Default: StoryObj<typeof Menu> = {
  args: {
    recipes: data,
  },
};
