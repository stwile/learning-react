import { UserRepositories } from './Repositories/UserRepositories';

import type { UserDetailType } from '../../types';
import type { FC } from 'react';

type Props = UserDetailType;

const UserDetails: FC<Props> = ({
  avatar_url: avatarUrl,
  location,
  login,
  name,
}) => (
  <div className="githubUser">
    <img src={avatarUrl} alt={login} style={{ width: 200 }} />
    <div>
      <h1>{login}</h1>
      {name && <p>{name}</p>}
      {location && <p>{location}</p>}
    </div>
    <UserRepositories
      login={login}
      onSelect={(repoName: string) => console.log(`${repoName} selected`)}
    />
  </div>
);

export { UserDetails };
