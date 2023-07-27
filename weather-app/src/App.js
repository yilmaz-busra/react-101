import "./App.css";
import { WeatherProvider } from "./Contxt";
import Main from "./Components/Main";
import Selectbox from "./Components/Selectbox";

function App() {
  return (
    <WeatherProvider>
      <h2 className="txt">Hava Durumu</h2>
      <Selectbox />
      <Main />
    </WeatherProvider>
  );
}

export default App;
