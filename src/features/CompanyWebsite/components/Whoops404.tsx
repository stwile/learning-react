import { useLocation } from 'react-router';

const Whoops404 = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
};

export { Whoops404 };
