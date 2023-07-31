import "./App.css";
import Palatte from "./Components/Palatte";

import { init } from "./socketApi";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="App">
      <Palatte />
    </div>
  );
}

export default App;
