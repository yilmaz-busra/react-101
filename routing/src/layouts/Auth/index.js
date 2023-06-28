import React from "react";
import { Link, Outlet } from "react-router-dom";

function AutLayout() {
  return (
    <div className="auth-container">
      <div className="auth-menu">
        <Link to="/auth">Giriş Yap</Link>
        <Link to="/auth/register">Kayıt ol</Link>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}

export default AutLayout;
