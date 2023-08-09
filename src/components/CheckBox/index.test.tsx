import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './index.stories';

describe('CheckBox Component Test', () => {
  const { Default, Checked } = composeStories(stories);

  it('初期表示テスト', () => {
    const { getByRole } = render(<Default />);
    const checkbox = getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);

    const text = checkbox.parentElement?.textContent ?? '';
    expect(text).toBe('not checked');
  });

  it('チェックされているべき', async () => {
    const { container } = render(<Checked />);

    await Checked.play({ canvasElement: container });

    const checkbox = screen.queryByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(true);

    const text = checkbox.parentElement?.textContent ?? '';
    expect(text).toBe('checked');
  });
});
