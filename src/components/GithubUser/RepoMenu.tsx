import { useEffect, type FC } from 'react';

import { useIterator } from './hooks/useIterator';

import type { UserDetailType } from '~/src/types';

type Props = {
  repositories: UserDetailType[];
  onSelect: (item: string) => void;
};

const RepoMenu: FC<Props> = ({ repositories, onSelect }) => {
  const [{ name }, previous, next] = useIterator(repositories);

  useEffect(() => {
    if (!name) return;
    onSelect(name);
  }, [name]);

  return (
    <div style={{ display: 'flex' }}>
      <button onClick={previous} type="button">
        &lt;
      </button>
      <p>{name}</p>
      <button onClick={next} type="button">
        &gt;
      </button>
    </div>
  );
};

export { RepoMenu };
