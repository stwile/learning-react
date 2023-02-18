import { useState } from 'react';

import { ColorList } from './components/ColorList';
import colorData from './data/color-data.json';

export const App = () => {
  const [colors] = useState(colorData);

  return <ColorList colors={colors} />;
};
