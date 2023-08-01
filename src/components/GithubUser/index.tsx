import { Fetch } from './Fetch';
import { UserDetails } from './UserDetails';

import type { UserDetailType } from '../../types';
import type { FC } from 'react';

type Props = {
  login: string;
};

const GithubUser: FC<Props> = ({ login }) => (
  <Fetch<UserDetailType>
    uri={`https://api.github.com/users/${login}`}
    renderSuccess={UserDetails}
  />
);

export { GithubUser };
