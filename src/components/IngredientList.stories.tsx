import { IngredientList } from './IngredientList';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Ingredient List',
  component: IngredientList,
} as ComponentMeta<typeof IngredientList>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof IngredientList> = (args) => <IngredientList {...args} />;

export const Default = Template.bind({});
Default.args = {
  list: [
    {
      name: 'hoge',
      amount: 911111,
      measurement: 'hoge',
    },
    {
      name: 'fuga',
      amount: 811111,
      measurement: 'hoge',
    },
  ],
};

export const Empty = Template.bind({});

Empty.args = {
  list: [],
};
