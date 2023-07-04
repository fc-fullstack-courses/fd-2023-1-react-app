function FlexContainer(props) {
  const { children, direction = 'row', jc = 'center', ai = 'center' } = props;

  const styles = {
    display: 'flex',
    flexDirection: direction,
    justifyContent: jc,
    alignItems: ai,
  };

  return <div style={styles}>{children}</div>;
}

export default FlexContainer;
