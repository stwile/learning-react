import { FixedSizeList } from 'react-window';

import type { PersonalType } from '../types';
import type { FC } from 'react';

type Props = {
  bigList: PersonalType[];
};

const PersonalList: FC<Props> = ({ bigList }) => {
  const renderRow = ({ index, style }: { index: number; style: object }) => (
    <div style={{ ...style, ...{ display: 'flex' } }}>
      <img src={bigList[index].avatar} alt={bigList[index].name} width={50} />
      <p>
        {bigList[index].name} - {bigList[index].email}
      </p>
    </div>
  );

  return (
    <FixedSizeList
      height={window.innerHeight}
      width={window.innerWidth - 20}
      itemCount={bigList.length}
      itemSize={50}
    >
      {renderRow}
    </FixedSizeList>
  );
};

export { PersonalList };
