import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import cities from "../data/cities.json";
const WeatherContext = createContext(); // baglamımı olusturdum
export const WeatherProvider = ({ children }) => {
  //alt bileşenlere hava durumu verilerini ve işlevleri sağlamak için bağlam saglayıcı bileseni olusturdum.
  const [weatherData, setWeatherData] = useState([]); //weatherData adında bir durum değişkeni ve onu güncellemek için setWeatherData adında bir fonksiyon
  const [selectedCity, setSelectedCity] = useState("Adana");
  const key = "14a434db4dbd4882a21134320230205";

  useEffect(() => {
    const selected = cities.filter((city) => city.name === selectedCity)[0];
    const getData = async () => {
      const { data } = await axios(
        `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${selected.name}&days=7&aqi=no&alerts=no`
      );

      setWeatherData(data.forecast.forecastday);
    };
    getData();
    // console.log(weatherData);
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
