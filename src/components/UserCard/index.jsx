function UserCard({ user }) {
  const {
    name: { first, last },
    picture: { medium: src },
    gender,
    email,
  } = user;

  const fullName = `${first} ${last}`;

  return (
    <article>
      <h1>{fullName}</h1>
      <img src={src} alt={fullName} />
      <ul>
        <li>
          <p>Gender: {gender}</p>
        </li>
        <li>
          <p>Email: {email}</p>
        </li>
      </ul>
    </article>
  );
}

export default UserCard;
