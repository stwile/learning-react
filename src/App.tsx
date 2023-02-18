import { StarRating } from './components/StarRating';

export const App = () => (
  <StarRating
    style={{ backgroundColor: 'lightblue' }}
    totalStars={5}
    doubleClick={() => {
      alert('double click');
    }}
  />
);
