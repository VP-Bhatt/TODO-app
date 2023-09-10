const TodoInput = (todo , setTodo, addTodo) => {
return (
    <div classname = "input-wrapper">
        <input
        type = "text"
        name = "todo"
        value = {todo}
        placeholder = "Create new Todo"
        onChange={(e) => {
            setTodo(e.target.value)
        }}
        />
        <button className="add-button" onClick={addTodo}>Add</button>

    </div>
);
};

export default TodoInput;