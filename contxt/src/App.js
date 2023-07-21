import "./App.css";
import Container from "./Components/Container";

import { ThemeProvider } from "./contex/ThemeContext";
import { UserProvider } from "./contex/UserContext";

function App() {
  //altinda bulunan butun componentlere verilen dataya erisim saglar
  return (
    // <ThemeContext.Provider value="dark">
    //   <Button />
    // </ThemeContext.Provider>
    <ThemeProvider>
      <UserProvider>
        <Container />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
