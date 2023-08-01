import { List } from './List';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'List',
  component: List,
} satisfies Meta<typeof List>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    renderEmpty: <p>This list is empty</p>,
  },
};
