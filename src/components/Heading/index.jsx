import React from 'react';
import PropTypes from 'prop-types';

// классовый компонент
// class Heading extends React.Component {
//   render() {
//     const { headerText, headerTitle } = this.props;
//     // console.log(this.props);

//     const h1Text = headerText ? headerText : 'My Site';

//     const h1 = React.createElement(
//       'h1',
//       { id: 'mainHeading', className: 'class1' },
//       h1Text
//     );

//     return React.createElement('header', { title: headerTitle }, h1);
//   }
// }

// функциональный компонент
// function Heading(props) {
//   const { headerText, headerTitle } = props;

//   const h1Text = headerText ? headerText : 'My Site';

//   const h1 = React.createElement(
//     'h1',
//     { id: 'mainHeading', className: 'class1' },
//     h1Text
//   );

//   return React.createElement('header', { title: headerTitle }, h1);
// }

// JSX версия
function Heading(props) {
  const { headerText, headerTitle } = props;

  const h1Text = headerText ? headerText : 'My Site';

  return (
    <header title={headerTitle}>
      <h1 id='mainHeading' className='class1'>
        {h1Text}
      </h1>
    </header>
  );
}

Heading.propTypes = {
  headerText: PropTypes.string,
  headerTitle: PropTypes.string.isRequired,
};

export default Heading;
