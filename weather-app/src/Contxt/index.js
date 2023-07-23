import { useContext, CreateContext, useState } from "react";

const WeatherContext = CreateContext();
export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
