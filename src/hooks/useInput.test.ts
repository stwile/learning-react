import { act, renderHook } from '@testing-library/react-hooks';

import { useInput } from './useInput';

describe('useInputTest', () => {
  it('何もしなければ初期値', () => {
    const initialValue = '#000000';

    const { result } = renderHook(() => useInput(initialValue));

    expect(result.current.props.value).toEqual(initialValue);
  });

  it('イベントを発火したら値が変わる', () => {
    const initialValue = '#000000';

    const { result } = renderHook(() => useInput(initialValue));

    expect(result.current.props.value).toEqual(initialValue);

    const changedValue = '#999999';
    const mock = {
      target: { value: changedValue },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.props.onChange(mock);
    });

    expect(result.current.props.value).toEqual(changedValue);
  });

  it('イベントを発火したらその値が入り、リセットすれば値が戻る', () => {
    const initialValue = '#000000';

    const { result } = renderHook(() => useInput(initialValue));

    expect(result.current.props.value).toEqual(initialValue);

    const changedValue = '#999999';
    const mock = {
      target: { value: changedValue },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.props.onChange(mock);
    });

    expect(result.current.props.value).toEqual(changedValue);

    act(() => {
      result.current.reset();
    });

    expect(result.current.props.value).toEqual(initialValue);
  });
});
