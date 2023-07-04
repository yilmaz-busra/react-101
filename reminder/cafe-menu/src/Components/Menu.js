import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu-nav">
      <ul>
        <li>
          <Link to="/">ALL</Link>
        </li>
        <li>
          <Link to="breakfast">Breakfast</Link>
        </li>
        <li>
          <Link to="lunch">Lunch</Link>
        </li>
        <li>
          <Link to="shakes">Shakes</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
