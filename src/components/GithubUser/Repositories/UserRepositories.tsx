import { Fetch } from '../Fetch';
import { RepoMenu } from '../RepoMenu';

import type { UserDetailType } from '~/src/types';

type Props = {
  login: string;
  onSelect: (item: string) => void;
};

const UserRepositories = ({ login, onSelect }: Props) => (
  <Fetch<UserDetailType[]>
    uri={`https://api.github.com/users/${login}/repos`}
    renderSuccess={(data: UserDetailType[]) => (
      <RepoMenu repositories={data} onSelect={onSelect} />
    )}
  />
);

export { UserRepositories };
