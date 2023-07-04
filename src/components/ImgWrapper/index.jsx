import styles from './ImgWrapper.module.scss';

function ImgWrapper(props) {
  const { children, width, heigth, ...restProps } = props;

  const inlineStyles = {
    width,
    heigth,
  };

  return (
    <div style={inlineStyles} className={styles.wrapper} {...restProps}>
      {children}
    </div>
  );
}

export default ImgWrapper;
