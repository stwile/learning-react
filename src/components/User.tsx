import { useReducer } from 'react';

import type { UserType } from '~/src/types';

type Props = {
  firstUser: UserType;
};

const User = ({ firstUser }: Props) => {
  const [user, setUser] = useReducer(
    (user1: UserType, newDetails: UserType) => ({ ...user1, ...newDetails }),
    firstUser,
  );

  return (
    <div>
      <h1>
        {user.firstName} {user.lastName} - {user.admin ? 'Admin' : 'User'}
      </h1>
      <p>
        Location: {user.city}, {user.state}
      </p>
      <button
        type="button"
        onClick={() => {
          setUser({
            ...user,
            admin: true,
          });
        }}
      >
        Make Admin
      </button>
    </div>
  );
};

export { User };
