import { Route, Routes } from 'react-router';

import { About } from './About';
import { Contact } from './Contact';
import { Events } from './Events';
import { Home } from './Home';
import { Products } from './Products';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
);

export { App };
