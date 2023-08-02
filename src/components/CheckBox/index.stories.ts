import { within, userEvent } from '@storybook/testing-library';

import { CheckBox } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'CheckBox',
  component: CheckBox,
} satisfies Meta<typeof CheckBox>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkBox = canvas.getByRole('checkbox');
    await userEvent.click(checkBox);
  },
};
