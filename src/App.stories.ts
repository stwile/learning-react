import { App } from './App';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'App',
  component: App,
} satisfies Meta<typeof App>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
