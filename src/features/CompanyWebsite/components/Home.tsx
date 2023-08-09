import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>[Company Website]</h1>
    <nav>
      <Link to="about">About</Link>
      <Link to="events">Events</Link>
      <Link to="products">Products</Link>
      <Link to="contact">Contact</Link>
    </nav>
  </div>
);

export { Home };
