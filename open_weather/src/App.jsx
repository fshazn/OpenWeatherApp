import { useEffect, useState } from "react";
import "./App.css";
import { fetchCurrentWeather, getWeatherData } from "./api/apiClient";
import City from './components/container1/City'

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchCurrentWeather().then((data) => {
      setCurrentWeather(data);
    });

    getWeatherData(6.9271, 79.8612).then((data) => {
      setWeatherData(data);
    });
  }, []);

  return (
    <>
      {/* <p>{JSON.stringify(currentWeather)}</p>
      <h1>{JSON.stringify(weatherData)}</h1> */}
      <City/>
    </>
  );
}

export default App;
