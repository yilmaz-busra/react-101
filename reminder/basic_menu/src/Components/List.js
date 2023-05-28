import React from "react";
import menu from "../data";
import Itemenu from "./Itemenu";

function List({ typee }) {
  if (typee === "all") {
    return (
      <div className="listt">
        {menu.map((item) => {
          return <Itemenu key={item.id} item={item} />;
        })}
      </div>
    );
  } else {
    const filter = menu.filter((item) => item.category === typee);
    return (
      <div className="listt">
        {filter.map((item) => {
          return <Itemenu key={item.id} item={item} />;
        })}
      </div>
    );
  }
}

export default List;
