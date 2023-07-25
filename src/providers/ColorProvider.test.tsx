import { renderHook, act } from '@testing-library/react';

import { ColorProvider, useColors } from './ColorProvider';

import type { v4 } from 'uuid';

const uuid = 'unique-id';
vi.mock('uuid', async () => {
  const actual = await vi.importActual<typeof v4>('uuid');

  return {
    ...actual,
    v4: () => uuid,
  };
});

describe('useColorsのテスト', () => {
  const existsColor = {
    id: '0175d1f0-a8c6-41bf-8d02-df5734d829a4',
    title: 'ocean at dusk',
    color: '#00c4e2',
    rating: 5,
  };

  it('初期値を検証', () => {
    const wrapper = ({ children }: { children: JSX.Element }) => (
      <ColorProvider>{children}</ColorProvider>
    );
    const { result } = renderHook(() => useColors(), {
      wrapper,
    });
    expect(result.current.colors).toEqual([
      {
        color: '#00c4e2',
        id: '0175d1f0-a8c6-41bf-8d02-df5734d829a4',
        rating: 5,
        title: 'ocean at dusk',
      },
      {
        color: '#26ac56',
        id: '83c7ba2f-7392-4d7d-9e23-35adbe186046',
        rating: 3,
        title: 'lawn',
      },
      {
        color: '#ff0000',
        id: 'a11e3995-b0bd-4d58-8c48-5e49ae7f7f23',
        rating: 0,
        title: 'bright red',
      },
    ]);
  });

  it('addColor', () => {
    const wrapper = ({ children }: { children: JSX.Element }) => (
      <ColorProvider>{children}</ColorProvider>
    );
    const { result } = renderHook(() => useColors(), {
      wrapper,
    });

    const addColor = {
      title: 'test',
      color: '#999999',
      rating: 0,
      id: uuid,
    };

    expect(result.current.colors).not.toEqual(
      expect.arrayContaining([addColor]),
    );

    act(() => {
      result.current.addColor(addColor.title, addColor.color);
    });

    expect(result.current.colors).toEqual(expect.arrayContaining([addColor]));
  });

  describe('rateColor', () => {
    it('IDが既存に存在する場合rateだけが変更される', () => {
      const wrapper = ({ children }: { children: JSX.Element }) => (
        <ColorProvider>{children}</ColorProvider>
      );
      const { result } = renderHook(() => useColors(), {
        wrapper,
      });

      const rating = 999999;
      expect(result.current.colors).not.toEqual(
        expect.arrayContaining([
          {
            ...existsColor,
            rating,
          },
        ]),
      );

      act(() => {
        result.current.rateColor(existsColor.id, rating);
      });

      expect(result.current.colors).toEqual(
        expect.arrayContaining([
          {
            ...existsColor,
            rating,
          },
        ]),
      );
    });

    it('IDが既存に存在しない場合何も変更されない', () => {
      const wrapper = ({ children }: { children: JSX.Element }) => (
        <ColorProvider>{children}</ColorProvider>
      );
      const { result } = renderHook(() => useColors(), {
        wrapper,
      });

      const rating = 999999;
      expect(result.current.colors).toEqual(
        expect.arrayContaining([existsColor]),
      );

      act(() => {
        result.current.rateColor('example-id', rating);
      });

      expect(result.current.colors).toEqual(
        expect.arrayContaining([existsColor]),
      );
    });
  });

  describe('removeColor', () => {
    it('idが一致する場合、除外されるべき', () => {
      const wrapper = ({ children }: { children: JSX.Element }) => (
        <ColorProvider>{children}</ColorProvider>
      );
      const { result } = renderHook(() => useColors(), {
        wrapper,
      });

      expect(result.current.colors).toEqual(
        expect.arrayContaining([existsColor]),
      );

      act(() => {
        result.current.removeColor(existsColor.id);
      });

      expect(result.current.colors).toEqual(
        expect.not.arrayContaining([existsColor]),
      );
    });
  });

  it('IDが既存に存在しない場合何も変更されない', () => {
    const wrapper = ({ children }: { children: JSX.Element }) => (
      <ColorProvider>{children}</ColorProvider>
    );
    const { result } = renderHook(() => useColors(), {
      wrapper,
    });

    expect(result.current.colors).toEqual(
      expect.arrayContaining([existsColor]),
    );

    act(() => {
      result.current.removeColor('example-id');
    });

    expect(result.current.colors).toEqual(
      expect.arrayContaining([existsColor]),
    );
  });
});
