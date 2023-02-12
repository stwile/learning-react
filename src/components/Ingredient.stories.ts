import { Ingredient } from './Ingredient';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Ingredient> = {
  title: 'Ingredient',
  component: Ingredient,
};
export default meta;

export const Default: StoryObj<typeof Ingredient> = {
  args: {
    name: 'hoge',
    amount: 999999,
    measurement: 'fuga',
  },
};
