import { AddColorForm } from './AddColorForm';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'AddColorForm',
  component: AddColorForm,
} satisfies Meta<typeof AddColorForm>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
