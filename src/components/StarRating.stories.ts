import { StarRating } from './StarRating';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'StarRating',
  component: StarRating,
} satisfies Meta<typeof StarRating>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    totalStars: 0,
    selectedStars: 0,
  },
};

export const Selected3: Story = {
  args: {
    totalStars: 3,
    selectedStars: 2,
  },
};
