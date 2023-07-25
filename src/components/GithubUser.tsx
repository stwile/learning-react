import { useEffect, useState } from 'react';

type Props = {
  login: string;
};

const GithubUser = ({ login }: Props) => {
  const [data, setData] = useState();

  useEffect(() => {
    if (!login) return;
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .catch(console.error);
  }, [login]);

  if (data) {
    console.log(data);

    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  }

  return null;
};

export { GithubUser };
