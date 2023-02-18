import { Star } from './Star';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Star> = {
  title: 'Star',
  component: Star,
};

export default meta;

export const Default: StoryObj<typeof Star> = {
  args: {},
};

export const Selected: StoryObj<typeof Star> = {
  args: {
    selected: true,
  },
};
