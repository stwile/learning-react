import data from '../data/color-data.json';

import { ColorList } from './ColorList';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ColorList',
  component: ColorList,
} satisfies Meta<typeof ColorList>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // todo
  args: {
    colors: data,
  },
};

export const Empty: Story = {};
