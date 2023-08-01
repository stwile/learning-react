import users from '../data/user-data.json';

import { User } from './User';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'User',
  component: User,
} satisfies Meta<typeof User>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    firstUser: users[0],
  },
};
