import { Star } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Star',
  component: Star,
} satisfies Meta<typeof Star>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Unselected: Story = {
  args: {
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    selected: true,
  },
};
