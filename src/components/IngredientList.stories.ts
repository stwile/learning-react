import { IngredientList } from './IngredientList';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Ingredient List',
  component: IngredientList,
} satisfies Meta<typeof IngredientList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
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

export const Empty: Story = {
  args: {
    list: [],
  },
};
