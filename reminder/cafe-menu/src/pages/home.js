import React from "react";
import menu from "../data";
import { useNavigate, Outlet } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="head-title">MENÜ</h2>
      <div className="page-container">
        <div className="list-container">
          {menu.map((item) => {
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
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
