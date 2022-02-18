import React, {useState} from "react";

function ToDoForm(props) {
    const [taskName, setTaskName] = useState("");

    function onChange(e) {
        setTaskName(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        props.addTaskToList(taskName);
        setTaskName("");
    }

    return (
    <form onSubmit={onSubmit}>
        <input 
          type="text"
          id="new-todo-item"
          value={taskName}
          onChange={onChange}
        />
        <button type="submit" className="btn">
          <p id="btn-text"> + </p>
        </button>
      </form> 
    );
}

export default ToDoForm;