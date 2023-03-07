import { AddColorForm } from './AddColorForm';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AddColorForm> = {
  title: 'AddColorForm',
  component: AddColorForm,
};
export default meta;

export const Default: StoryObj<typeof AddColorForm> = {
  args: {},
};
