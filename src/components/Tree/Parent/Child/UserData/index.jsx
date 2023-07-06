function UserData({ user }) {
  return (
    <div style={{padding: '20px', border: '2px solid red'}}>
      <h2>UserData</h2>
      <h3>
        {user.firstName} {user.lastName}
      </h3>
    </div>
  );
}

export default UserData;
