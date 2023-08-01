import { renderHook } from '@testing-library/react';

import { useIterator } from './useIterator';

describe('useInputTest', () => {
  const items: string[] = ['太郎', '治郎', '三郎', '士郎', '五郎'];
  it('初期値', () => {
    const { result } = renderHook(() => useIterator<string>(items));

    expect(result.current[0]).toEqual('太郎');
  });

  it('インデックスの初期値をいじる', () => {
    const { result } = renderHook(() => useIterator<string>(items, 3));

    expect(result.current[0]).toEqual('士郎');
  });
});
