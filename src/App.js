import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React todo app</h1>

      <div classname="input-wrapper">
        <input type="text" name="todo" placeholder="create a new TODO"/>
        <button className="add-button">Add</button>
      </div>
    </div>
  );
}

export default App;
