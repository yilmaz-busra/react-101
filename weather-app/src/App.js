import logo from "./logo.svg";
import "./App.css";
import { WeatherProvider } from "./Contxt";
import Main from "./Components/Main";

function App() {
  return (
    <WeatherProvider>
      <Main />
    </WeatherProvider>
  );
}

export default App;
