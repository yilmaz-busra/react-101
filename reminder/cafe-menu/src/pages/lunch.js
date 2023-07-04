import React from "react";
import menu from "../data";
import { Outlet, useNavigate } from "react-router-dom";
function Lunch() {
  const lunch = menu.filter((item) => item.category === "lunch");
  const nav = useNavigate();
  return (
    <div>
      <h2 className="head-title">LUNCH</h2>
      <div className="list-container">
        {lunch.map((item) => {
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

export default Lunch;
