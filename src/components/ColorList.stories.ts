import data from '../data/color-data.json';

import { ColorList } from './ColorList';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ColorList> = {
  title: 'ColorList',
  component: ColorList,
};
export default meta;

export const Default: StoryObj<typeof ColorList> = {
  args: {
    colors: data,
  },
};

export const Empty: StoryObj<typeof ColorList> = {};
