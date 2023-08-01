import { Cats } from './Cats';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Cats',
  component: Cats,
} satisfies Meta<typeof Cats>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
