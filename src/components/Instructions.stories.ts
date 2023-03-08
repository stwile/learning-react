import { Instructions } from './Instructions';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Instructions',
  component: Instructions,
} satisfies Meta<typeof Instructions>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'hoge',
    steps: ['fuga', 'boo'],
  },
};
