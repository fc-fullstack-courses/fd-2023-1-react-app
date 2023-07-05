import queryString from 'query-string';

export const getUsers = (options) => {

  const defaultOptions = {
    page: 1,
    results: 20,
    format: 'json',
    seed: 'fd-2023-1'
  }

  const finalOptions = {
    ...defaultOptions,
    ...options
  }

  const query = queryString.stringify(finalOptions);

  return fetch(`https://randomuser.me/api/?${query}`).then((response) =>
    response.json()
  );
};
