import "./App.css";
import Main from "./Main";
import List from "./List";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { complete: true, task: "görevi gir" },
    { complete: false, task: "görevi sil" },
  ]);
  return (
    <div className="App">
      <Main todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
