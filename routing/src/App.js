import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Dashboard/Home";
import Users from "./pages/Dashboard/Users";
import UserDetail from "./pages/Dashboard/UserDetail";
import Contact from "./pages/Dashboard/Contact";

import Login from "./pages/Auth/Login";
import DashboardLayout from "./layouts/Dashboard/index";
import AutLayout from "./layouts/Auth";
import Register from "./layouts/Auth/Register";
import ERROR404 from "./pages/ERROR404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        {/* bir sayfamıza denk geliyo */}

        <Route path="auth" element={<AutLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<ERROR404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
