import { Ingredient } from './Ingredient';

import type { ComponentStory } from '@storybook/react';

export default {
  title: 'Ingredient',
  component: Ingredient,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Ingredient> = (args) => <Ingredient {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: 'hoge',
  amount: 999999,
  measurement: 'fuga',
};
