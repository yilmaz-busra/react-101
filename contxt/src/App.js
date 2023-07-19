import "./App.css";
import Container from "./Components/Container";

import { ThemeProvider } from "./contex/ThemeContext";

function App() {
  //altinda bulunan butun componentlere verilen dataya erisim saglar
  return (
    // <ThemeContext.Provider value="dark">
    //   <Button />
    // </ThemeContext.Provider>
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  );
}

export default App;
