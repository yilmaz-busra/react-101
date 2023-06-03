import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Contact from "./pages/Contact";
import Menu from "./Components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        {/* bir sayfamıza denk geliyo */}
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
