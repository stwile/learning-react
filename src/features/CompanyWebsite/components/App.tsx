import { useRoutes } from 'react-router-dom';

import { About } from './About';
import { Contact } from './Contact';
import { Events } from './Events';
import { History } from './History';
import { Home } from './Home';
import { Location } from './Location';
import { Products } from './Products';
import { Services } from './Services';
import { Whoops404 } from './Whoops404';

const App = () =>
  useRoutes([
    { path: '/', element: <Home /> },
    {
      path: 'about',
      element: <About />,
      children: [
        {
          path: 'services',
          element: <Services />,
        },
        { path: 'history', element: <History /> },
        {
          path: 'location',
          element: <Location />,
        },
      ],
    },
    { path: 'events', element: <Events /> },
    { path: 'products', element: <Products /> },
    { path: 'contact', element: <Contact /> },
    { path: '*', element: <Whoops404 /> },
  ]);

export { App };
