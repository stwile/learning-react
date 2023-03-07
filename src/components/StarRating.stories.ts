import { StarRating } from './StarRating';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof StarRating> = {
  title: 'StarRating',
  component: StarRating,
};

export default meta;

export const Default: StoryObj<typeof StarRating> = {
  args: {},
};

export const Selected3: StoryObj<typeof StarRating> = {
  args: {
    totalStars: 3,
    selectedStars: 2,
  },
};
