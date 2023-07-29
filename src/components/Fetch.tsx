import { useFetch } from '../hooks/useFetch';

import type { FC } from 'react';

type Props<T> = {
  uri: string;
  renderSuccess: FC<T>;
  loadingFallback?: JSX.Element;
  renderError?: (error: Error) => JSX.Element;
};

const Fetch = <T,>({
  uri,
  renderSuccess,
  loadingFallback = <p>loading...</p>,
  renderError = (error: Error) => <pre>{JSON.stringify(error, null, 2)}</pre>,
}: Props<T>) => {
  const { error, loading, data } = useFetch<T>(uri);
  if (error) return renderError(error);
  if (loading) return loadingFallback;
  if (data) return renderSuccess(data);

  return null;
};

export { Fetch };
