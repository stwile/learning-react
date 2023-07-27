import { useEffect, useState } from 'react';

type Props = {
  login: string;
};

type Response = {
  name: string;
  login: string;
  avatar_url: string;
  location: string;
};

const GithubUser = ({ login }: Props) => {
  const [data, setData] = useState<Response>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!login) return;
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (loading) return <h1>loading...</h1>;
  if (!data) return null;

  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
};

export { GithubUser };
