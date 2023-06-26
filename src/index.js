import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// классовый компонент
// class Heading extends React.Component {
//   render() {
//     const h1 = React.createElement(
//       'h1',
//       { id: 'mainHeading', className: 'class1' },
//       'My Site'
//     );

//     return React.createElement('header', {}, h1);
//   }
// }

// функциональный компонент
function Heading() {
  
  const h1 = React.createElement(
    'h1',
    { id: 'mainHeading', className: 'class1' },
    'My Site'
  );

  return React.createElement('header', {}, h1);
}

const header = React.createElement(Heading);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(header);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
