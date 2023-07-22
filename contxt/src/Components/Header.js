import { useContext } from "react";
// import ThemeContext from "../contex/ThemeContext";

import { useTheme } from "../contex/ThemeContext";
function Header() {
  // const { theme, setTheme } = useContext(ThemeContext);
  const { theme, setTheme } = useTheme();
  return (
    <div>
      Active Theme: {theme}
      <br />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
}

export default Header;
