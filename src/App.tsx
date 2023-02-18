import { StarRating } from './components/StarRating';

export const App = () => (
  <StarRating
    style={{ backgroundColor: 'lightblue' }}
    totalStars={0}
    doubleClick={() => {
      alert('double click');
    }}
  />
);
