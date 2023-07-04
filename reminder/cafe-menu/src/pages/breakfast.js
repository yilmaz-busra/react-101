import React from "react";
import menu from "../data";
import { Outlet, useNavigate } from "react-router-dom";
function Breakfast() {
  const breakfast = menu.filter((item) => item.category === "breakfast");
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="head-title">BREAKFAST</h2>
      <div className="list-container">
        {breakfast.map((item) => {
          return (
            <div
              className="home-item"
              key={item.id}
              onClick={() =>
                navigate(`${item.title} ${item.price} ${item.desc}`)
              }
            >
              {item.title}
            </div>
          );
        })}
        <Outlet />
      </div>
    </div>
  );
}

export default Breakfast;
