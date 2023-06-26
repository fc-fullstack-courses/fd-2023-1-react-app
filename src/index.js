import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
function Heading(props) {
  const { headerText, headerTitle } = props;

  const h1Text = headerText ? headerText : 'My Site';

  const h1 = React.createElement(
    'h1',
    { id: 'mainHeading', className: 'class1' },
    h1Text
  );

  return React.createElement('header', { title: headerTitle }, h1);
}

// const header = React.createElement(Heading, {
//   headerText: 'Prop Site',
// });

const header = React.createElement(Heading, {
  headerText: 'Rozetka',
  headerTitle: 'text for title',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(header);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
