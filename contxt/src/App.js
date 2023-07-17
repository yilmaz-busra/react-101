import "./App.css";
import Button from "./Components/Button";
import ThemeContext from "./contex/ThemeContext";

function App() {
  //altinda bulunan butun componentlere verilen dataya erisim saglar
  return (
    <ThemeContext.Provider value="dark">
      <Button />
    </ThemeContext.Provider>
  );
}

export default App;
