import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Breakfast from "./pages/breakfast";
import Menu from "./Components/Menu";

import MenuDetails from "./Components/MenuDetails";
import Lunch from "./pages/lunch";
import Shakes from "./pages/shakes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path=":id" element={<MenuDetails />} />
          </Route>
          <Route path="breakfast" element={<Breakfast />}>
            <Route path=":id" element={<MenuDetails />} />
          </Route>
          <Route path="lunch" element={<Lunch />}>
            <Route path=":id" element={<MenuDetails />} />
          </Route>
          <Route path="shakes" element={<Shakes />}>
            <Route path=":id" element={<MenuDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div></div>
    </div>
  );
}

export default App;
