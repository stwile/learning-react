import { IngredientList } from './IngredientList';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof IngredientList> = {
  title: 'Ingredient List',
  component: IngredientList,
};

export default meta;

export const Default: StoryObj<typeof IngredientList> = {
  args: {
    list: [
      {
        name: 'hoge',
        amount: 911111,
        measurement: 'hoge',
      },
      {
        name: 'fuga',
        amount: 811111,
        measurement: 'hoge',
      },
    ],
  },
};

export const Empty: StoryObj<typeof IngredientList> = {
  args: {
    list: [],
  },
};
