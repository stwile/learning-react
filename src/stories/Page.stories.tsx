import { within, userEvent } from '@storybook/testing-library';

import { Page } from './Page';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Page>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
LoggedIn.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = canvas.getByRole('button', { name: /Log in/i });
  userEvent.click(loginButton);
};
