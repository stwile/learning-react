import { faker } from '@faker-js/faker';

import { PersonalList } from './PersonalList';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'PersonalList',
  component: PersonalList,
} satisfies Meta<typeof PersonalList>;
export default meta;

type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const bigList = [...Array(5000)].map(() => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar(),
}));

export const Default: Story = {
  args: {
    bigList,
  },
};
