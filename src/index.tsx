import { render } from 'react-dom';

import { App } from './App';
import { ColorProvider } from './providers/ColorProvider';

render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById('root'),
);
