import { Instructions } from './Instructions';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Instructions> = {
  title: 'Instructions',
  component: Instructions,
};
export default meta;

export const Default: StoryObj<typeof Instructions> = {
  args: {
    title: 'hoge',
    steps: ['fuga', 'boo'],
  },
};
