import { Cat } from './Cat';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Cat',
  component: Cat,
} satisfies Meta<typeof Cat>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'maru',
  },
};
