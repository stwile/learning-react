import type { FC } from 'react';

type Props = {
  data?: [];
  renderEmpty: JSX.Element;
};

const List: FC<Props> = ({ data = [], renderEmpty }) => {
  if (!data.length) return renderEmpty;

  return <p>{data.length} items</p>;
};

export { List };
