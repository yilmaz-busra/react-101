import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <button className="logo-btn">
        <span className="font1">tabby</span> <br />
        <span className="font2">digital</span>
      </button>
      <div className="nav-list">
        <button className="btnstyle">Anasyfa</button>

        <button className="btnstyle">İşlerimiz</button>

        <button className="btnstyle">Ekibimiz</button>

        <button className="btnstyle">Blog</button>
      </div>
    </div>
  );
}

export default Navbar;
