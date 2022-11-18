import logo from './logo.svg';
import './App.css';
import Button from './components/button.js';
import Checkbox from './components/checkbox';
import ListOfTodos from './components/listOfTodos';
import NewTodos from './components/newTodos';

console.log(Button);

function App() {
  return (
    

    <div className="App">
      <headers>
      <h1>Todo List</h1>
    </headers>
      <NewTodos/>
      <ListOfTodos/>
      <Checkbox/>
      <Button />

    </div>
  );
}

export default App;
