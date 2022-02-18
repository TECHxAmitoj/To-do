import React, {useState} from 'react';
import './App.css';
import ToDoForm from './ToDoForm';
import Task from './Task';
import todo from './todo.gif';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const taskList = todoItems.map(task => (
    <Task
      name={task.name}
      isComplete={task.isComplete}
    />
  ));

  function addTaskToList(name) {
    const newTodoItem = {name: name, isComplete: false};
    setTodoItems([...todoItems, newTodoItem]);
  }

  return (
      <div className="App">
        <header className="App-header">
          <img src={todo}/>
          <h1>To-Do List</h1>
          <ToDoForm addTaskToList={addTaskToList}/>
          <ul>
            {taskList}
          </ul>
        </header>
      </div>
  );
}

export default App;
