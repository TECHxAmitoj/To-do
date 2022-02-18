function Task(props) {
    return (
    <div className="task">
        <input id="todo-checkbox" type="checkbox" defaultChecked={props.isComplete}/>
        <label>{props.name}</label>
    </div>
    );
}

export default Task;