import React from "react";
import { useWeather } from "../Contxt/index";

function Selectbox() {
  const { setSelectedCity, cities } = useWeather();
  return (
    <div>
      <select
        className="selected"
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        {cities.map((city) => {
          return (
            <option value={city.name} key={city.id}>
              {city.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Selectbox;
