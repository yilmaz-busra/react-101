import React from "react";
import menu from "../data";
import { useParams } from "react-router-dom";

function MenuDetails() {
  const { id } = useParams();

  return <div>{id}</div>;
}

export default MenuDetails;
