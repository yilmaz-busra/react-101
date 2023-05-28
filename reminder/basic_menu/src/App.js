import "./App.css";
import List from "./Components/List";
import { useState } from "react";

function App() {
  const [typee, setTypee] = useState("all");
  const onClck = (e) => {
    setTypee(e.target.name);
  };
  return (
    <div className="App">
      <div>Menu</div>
      <button name="all" onClick={onClck}>
        All
      </button>
      <button name="breakfast" onClick={onClck}>
        Breakfast
      </button>
      <button name="lunch" onClick={onClck}>
        Lunch
      </button>
      <button name="shakes" onClick={onClck}>
        Shakes
      </button>

      <div>
        <List typee={typee} />
      </div>
    </div>
  );
}

export default App;
