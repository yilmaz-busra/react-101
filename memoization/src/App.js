import "./App.css";
import { useState, useMemo, useCallback } from "react";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  // const data = useMemo(() => {
  //   return { name: "bus", number };
  // }, [number]);

  // const data = calculateObeject();

  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1);
  }, []);

  return (
    <div className="App">
      <Header increment={increment} />
      <hr />
      <h1>{number}</h1>
      <br /> <br />
      <input value={text} onChange={({ target }) => setText(target.value)} />
    </div>
  );
}

// function calculateObeject() {
//   console.log("Calculating...");
//   for (let i = 0; i < 10000000000; i++) {}
//   console.log("Calculated");
// }

export default App;
