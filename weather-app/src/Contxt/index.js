import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import cities from "../data/cities.json";
const WeatherContext = createContext();
export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState("İstanbul");
  const key = " 5feb1ccaefbf73a0af111024f9413deb";

  useEffect(() => {
    const chosen = cities.filter((city) => city.name === city)[0];
    const getData = async () => {
      const { data } = await axios(
        `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${chosen.name}&days=7&aqi=no&alerts=no`
      );

      setWeatherData(data.forecast.forecastday);
    };
    getData();
    console.log(weatherData);
  }, [city]);

  const values = {
    cities,
    setCity,
    city,
    weatherData,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => {
  return useContext(WeatherContext);
};
