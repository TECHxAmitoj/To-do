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

  function clearList() {
    setTodoItems([]);
  }

  const clearButton = todoItems.length > 0 ? 
  (
    <button type="submit" className="btn" id="clear" onClick={clearList}>
      Clear List
    </button>
  ) : (<></>);

  return (
      <div className="App">
        <header className="App-header">
          <img src={todo}/>
          <h1>To-Do List</h1>
          <div>
            <ToDoForm addTaskToList={addTaskToList}/>
            <ul>
              {taskList}
            </ul>
            {clearButton}
          </div>
          <br/><br/>
        </header>
      </div>
  );
}

export default App;
