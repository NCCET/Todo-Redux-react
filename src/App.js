import logo from './logo.svg';
import './App.css';
import DisplayTodos from './components/DisplayTodos';
import ReactDOM from 'react-dom';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Todos/>
      <DisplayTodos/>
    </div>
  );
}

export default App;
