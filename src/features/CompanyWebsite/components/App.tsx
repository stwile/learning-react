import { Route, Routes } from 'react-router';

import { About } from './About';
import { Contact } from './Contact';
import { Events } from './Events';
import { History } from './History';
import { Home } from './Home';
import { Products } from './Products';
import { Services } from './Services';
import { Whoops404 } from './Whoops404';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="history" element={<History />} />
      <Route path="events" element={<Events />} />
      <Route path="products" element={<Products />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Whoops404 />} />a
    </Routes>
  </div>
);

export { App };
