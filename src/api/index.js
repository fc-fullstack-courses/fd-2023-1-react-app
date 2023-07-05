export const getUsers = (page) => {
  return fetch(
    `https://randomuser.me/api/?results=20&seed=fd-2023-1&page=${page}`
  ).then((response) => response.json());
};
