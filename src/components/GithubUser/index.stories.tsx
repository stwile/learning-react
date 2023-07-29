import { GithubUser } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'GithubUser',
  component: GithubUser,
} satisfies Meta<typeof GithubUser>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    login: 'stwile',
  },
};
