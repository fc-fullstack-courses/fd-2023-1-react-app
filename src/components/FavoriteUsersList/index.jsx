function FavoriteUsersList({ users }) {
  const usersList = users.map((user) => (
    <li key={user.id}>
      <h1>
        {user.firstName} {user.lastName}
      </h1>
    </li>
  ));

  return <ul>{usersList}</ul>;
}

export default FavoriteUsersList;
