import queryString from 'query-string';
import CONFIG from '../configs';

export const getUsers = (options) => {
  const defaultOptions = {
    page: 1,
    results: CONFIG.RESULTS,
    format: CONFIG.FORMAT,
    seed: CONFIG.API_KEY,
    inc: CONFIG.DEFAULT_USER_DATA,
  };

  const finalOptions = {
    ...defaultOptions,
    ...options,
  };

  const query = queryString.stringify(finalOptions, { arrayFormat: 'comma' });

  return fetch(`${CONFIG.BASE_URL}?${query}`).then((response) =>
    response.json()
  );
};
