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

// ローカルストレージからデータを読み込む
const loadJSON = <T,>(key: string): T | null => {
  if (!key) return null;

  const json = localStorage.getItem(key);
  if (json === null) return null;

  return JSON.parse(json) as T;
};

// ローカルストレージにデータを書き込む
const saveJSON = <T,>(key: string, data: T): void =>
  localStorage.setItem(key, JSON.stringify(data));

const GithubUser = ({ login }: Props) => {
  const [data, setData] = useState(loadJSON<Response>(`user:${login}`));

  useEffect(() => {
    if (!login) return;
    if (data === null) return;
    if (data.login === login) return;
    const { name, avatar_url: avatarUrl, location } = data;
    saveJSON<Response>(`user:${login}`, {
      name,
      login,
      avatar_url: avatarUrl,
      location,
    });
  }, [data]);

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
