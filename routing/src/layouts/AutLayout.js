import React from "react";
import { Outlet } from "react-router-dom";

function AutLayout() {
  return (
    <div>
      Auth Layout
      <hr />
      <Outlet />
    </div>
  );
}

export default AutLayout;
