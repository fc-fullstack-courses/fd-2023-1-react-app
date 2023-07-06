import Parent from "./Parent";

function Tree({ user }) {
  return (
    <div style={{padding: '20px', border: '2px solid black'}}>
      <h2>Tree</h2>
      <Parent user={user} />
    </div>
  );
}

export default Tree;
