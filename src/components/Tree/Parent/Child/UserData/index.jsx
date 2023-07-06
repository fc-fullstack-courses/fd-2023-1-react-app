import { UserContext } from '../../../../../contexts';

function UserData(props) {
  const render = (user) => (
    <div style={{ padding: '20px', border: '2px solid red' }}>
      <h2>UserData</h2>
      <h3>
        {user.firstName} {user.lastName}
      </h3>
    </div>
  );
  return <UserContext.Consumer>{render}</UserContext.Consumer>;
}

export default UserData;
