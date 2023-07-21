import React from "react";
import Button from "./Button";
import Header from "./Header";
import { useContext } from "react";
import ThemeContext from "../contex/ThemeContext";
import Profile from "./Profile";

// context appi kullandigimiz zaman herhangi bir state i
//  herhangibir componentte kullanmak icin ic ice alt alta
//  tekrar tekrar prop olarak göndermemize gerek yok
function Container() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme === "dark" ? theme : ""}`}>
      <Header />
      <hr />
      <Button />
      <hr />
      <Profile />
    </div>
  );
}

export default Container;
