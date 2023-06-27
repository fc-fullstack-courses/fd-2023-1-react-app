import './App.css';
import Heading from './components/Heading';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <Heading headerText='header text prop' headerTitle='header title prop' />
      <Counter />
    </>
  );
}

export default App;
