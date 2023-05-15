import React from "react";
import style from "./style.module.css";

function A() {
  console.log("A", style);
  return <div className={style.title}>A</div>;
}

export default A;
