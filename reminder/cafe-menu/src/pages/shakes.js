import React from "react";
import menu from "../data";
import { useNavigate, Outlet } from "react-router-dom";

function Shakes() {
  const shakes = menu.filter((item) => item.category === "shakes");

  const nav = useNavigate();
  return (
    <div>
      <h2 className="head-title">SHAKES</h2>
      <div className="list-container">
        {shakes.map((item) => {
          return (
            <div
              className="home-item"
              key={item.id}
              onClick={() => nav(`${item.title} ${item.price} ${item.desc}`)}
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

export default Shakes;
