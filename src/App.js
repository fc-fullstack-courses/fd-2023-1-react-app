import React from 'react';
import './App.css';
import Counter from './components/Counter';
import SignUpForm from './components/SignUpForm';
import GreetingDashboard from './components/GreetingDashboard';
import Heading from './components/Heading';
import Greeting from './components/Greeting';
import List from './components/List';
import FlexContainer from './components/FlexContainer';
import ImgWrapper from './components/ImgWrapper';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCounterVisible: true,
    };
  }

  toggleVisibility = () => {
    this.setState({
      isCounterVisible: !this.state.isCounterVisible,
    });
  };

  render() {
    const { isCounterVisible } = this.state;

    return (
      <>
        <Heading headerText={'asdsadsdas'} headerTitle='adsada' />
        <button onClick={this.toggleVisibility}>
          Toggle counter visibility
        </button>
        {isCounterVisible && <Counter />}
        <SignUpForm />
        <GreetingDashboard />
        <List listTitle='Продукты'>
          <li>Хлеб</li>
          <li>Молоко</li>
        </List>
        <List listTitle='задачи'>
          <li>помыть посуду</li>
          <li>выгулять кота</li>
        </List>
        <FlexContainer direction='column' ai='flex-end'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </FlexContainer>
        <ImgWrapper
          width='500px'
          heigth='500px'
          onClick={() => alert('you clicked')}
          title="some title"
          id="wrapper1"
        >
          <img src='https://apod.nasa.gov/apod/image/2110/LucyLaunchB_Kraus_2048.jpg' />
        </ImgWrapper>
      </>
    );
  }
}

/*
  Созадть компонент FlexContainer. Его стили можно настроить пропсами
  также ему можно передать детей, которых он будет отображать в качестве
  флекс-детей

*/

export default App;
