import data from '../data/recipe.json';

import { Menu } from './Menu';

import type { ComponentStory } from '@storybook/react';

export default {
  title: 'Menu',
  component: Menu,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Default = Template.bind({});

Default.args = {
  recipes: data,
};
