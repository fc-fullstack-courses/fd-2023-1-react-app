import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// классовый компонент
class Heading extends React.Component {
  render() {
    const { headerText, headerTitle } = this.props;
    // console.log(this.props);

    const h1Text = headerText ? headerText : 'My Site';

    const h1 = React.createElement(
      'h1',
      { id: 'mainHeading', className: 'class1' },
      h1Text
    );

    return React.createElement('header', { title: headerTitle }, h1);
  }
}

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

// const header = React.createElement(Heading, {
//   headerText: 'Prop Site',
// });

class Counter extends React.Component {
  render() {
    const display = React.createElement('p', {}, `Current count is 0`);
    const addButton = React.createElement('button', {}, 'Add 1');

    return React.createElement('section', {}, display, addButton);
  }
}

class CounterPage extends React.Component {
  render() {
    const header = React.createElement(Heading, {
      headerText: 'Counter Page',
      headerTitle: 'text for title',
    });

    const counter = React.createElement(Counter);

    return React.createElement(React.Fragment, {}, header, counter);
  }
}

// const header = React.createElement(Heading, {
//   headerText: 'Counter Page',
//   headerTitle: 'text for title',
// });

// const counter = React.createElement(Counter);

const counterPage = React.createElement(CounterPage);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(counterPage);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
