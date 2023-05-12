import "./App.css";
import Header from "./Components/Header";
import { useState } from "react";
import List from "./Components/List";
import Footer from "./Components/Footer";

function App() {
  const [duty, setDuty] = useState([
    { complete: true, todo: " DO HW " },
    { complete: false, todo: " DO HW2 " },
  ]);

  const [filtered, setFiltered] = useState("All");
  return (
    <div className="App">
      <Header duty={duty} setDuty={setDuty} />
      <Footer
        filtered={filtered}
        setFiltered={setFiltered}
        duty={duty}
        setDuty={setDuty}
      />
      <List duty={duty} setDuty={setDuty} filtered={filtered} />
    </div>
  );
}

export default App;
