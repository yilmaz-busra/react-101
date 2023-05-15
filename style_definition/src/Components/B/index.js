import React from "react";
import style from "./style.module.css";
function B() {
  console.log("B", style);
  return <div className={style.title}>B</div>;
}

export default B;
