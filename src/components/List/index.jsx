function List(props) {
  const { listTitle, children } = props;

  return (
    <article>
      <h1>{listTitle}</h1>
      <ul>{children}</ul>
    </article>
  );
}

export default List;
