import ReactDOM from 'react-dom/client';

import { Menu } from './components/menu';
import data from './data/recipe.json';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Menu recipes={data} />);
