import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import cities from "../data/cities.json";
const WeatherContext = createContext(); // baglamımı olusturdum
export const WeatherProvider = ({ children }) => {
  //alt bileşenlere hava durumu verilerini ve işlevleri sağlamak için bağlam saglayıcı bileseni olusturdum.
  const [weatherData, setWeatherData] = useState([]); //weatherData adında bir durum değişkeni ve onu güncellemek için setWeatherData adında bir fonksiyon
  const [selectedCity, setSelectedCity] = useState("İstanbul");
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
  }, [selectedCity]);

  const values = {
    //bağlamda paylaşılacak değerleri bir nesne olarak oluşturdum
    cities,
    selectedCity,
    setSelectedCity,
    weatherData,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => {
  return useContext(WeatherContext);
};
