import "./App.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useState } from "react";

function App() {

  const [todo , setTodo] = useState("");
  const [todos , setTodos] = useState([]);

  const addTodo = () => {
    if(todo !== ""){
      setTodos([...todos, todo]);
      setTodo("");
    }
  }

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo)  => {
      return todo!== text;
    });
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <h1>React todo app</h1>

      <TodoInput todo = {todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList list = {todos} remove = {deleteTodo} />
    </div>
  );
};

export default App;
