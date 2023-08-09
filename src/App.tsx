import { Route, Routes } from 'react-router';

import { AddColorForm } from './components/AddColorForm';
import { ColorDetails } from './components/ColorDetails';
import { ColorList } from './components/ColorList';
import { ColorProvider } from './providers/ColorProvider';

export const App = () => (
  <ColorProvider>
    <AddColorForm />
    <Routes>
      <Route path="/" element={<ColorList />} />
      <Route path=":id" element={<ColorDetails />} />
    </Routes>
    <ColorList />
  </ColorProvider>
);
