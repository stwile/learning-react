import { Ingredient } from './Ingredient';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Ingredient',
  component: Ingredient,
} satisfies Meta<typeof Ingredient>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'hoge',
    amount: 999999,
    measurement: 'fuga',
  },
};
