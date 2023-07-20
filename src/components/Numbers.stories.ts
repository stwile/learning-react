import { Numbers } from './Numbers';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Numbers',
  component: Numbers,
} satisfies Meta<typeof Numbers>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
