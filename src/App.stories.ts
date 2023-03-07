import { App } from './App';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof App> = {
  title: 'App',
  component: App,
};
export default meta;

export const Default: StoryObj<typeof App> = {};
