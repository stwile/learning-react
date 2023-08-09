import { render } from '@testing-library/react';

import { Star } from '.';

describe('Star Component', () => {
  test('render an h1', () => {
    const { getByText } = render(<Star />);
    const h1 = getByText(/Great Star/);
    expect(h1.textContent).toBe('Great Star');
  });
});
