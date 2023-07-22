import { useContext } from "react";
// import ThemeContext from "../contex/ThemeContext";
import { useTheme } from "../contex/ThemeContext";

function Button() {
  // const { theme, setTheme } = useContext(ThemeContext);
  const { theme, setTheme } = useTheme();
  // console.log(data);
  return (
    <div>
      Active Theme : {theme}
      <br />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
}

export default Button;
