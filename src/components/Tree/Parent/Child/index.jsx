import UserData from "./UserData";

function Child({ user }) {
  return (
    <div style={{padding: '20px', border: '2px solid blue'}}>
      <h2>Child</h2>
      <UserData user={user} />
    </div>
  );
}

export default Child;
