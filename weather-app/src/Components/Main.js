import React from "react";
import { useWeather } from "../Contxt";

function Main() {
  const { weatherData } = useWeather();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="container">
      <ul>
        {weatherData.map((info, i) => {
          var d = new Date(info.date);
          var dayName = days[d.getDay()];
          return (
            <li key={i}>
              {/* hava durumu bilgilerinin yazacağı div */}
              <div className="container2">
                <span className="day">{dayName}</span>
                <img src={`${info.day.condition.icon}`} alt="" />
                <span className="max">{info.day.maxtemp_c}°C</span>
                <span className="min">{info.day.mintemp_c}°C</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Main;
