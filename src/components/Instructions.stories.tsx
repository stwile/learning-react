import { Instructions } from './Instructions';

import type { ComponentStory } from '@storybook/react';

export default {
  title: 'Instructions',
  component: Instructions,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Instructions> = (args) => <Instructions {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'hoge',
  steps: ['fuga', 'boo'],
};
