import React, { useEffect, useState } from "react";
import "./city.css";
import Sunny from "../../assets/Sunny.png";
import Clear from "../../assets/clear.png";
import Cloudy from "../../assets/cloudy.png";
import HeavyRain from "../../assets/heavyrain and storm.png";
import nightCloudy from "../../assets/night cloudy.png";
import Night from "../../assets/night.png";
import Rain from "../../assets/rain.png";
import Thunder from "../../assets/thunder.png";
import Snow from "../../assets/snow.png";
import Mist from "../../assets/mist.png";
import Temp from "../../assets/temp2.png";
import humidity from "../../assets/humidity.png";
import wind from "../../assets/wind.png";
import rain from "../../assets/rain2.png";
import cloud from "../../assets/cloud.png";

const city = ({ data }) => {
  if (!data) {
    return <div>Loading</div>;
  }

  const [weatherImage, setWeatherImage] = useState(Sunny);

  useEffect(() => {
    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWeatherImage(Clear);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWeatherImage(Cloudy);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWeatherImage(Snow);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWeatherImage(nightCloudy);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWeatherImage(Night);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWeatherImage(HeavyRain);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWeatherImage(Rain);
    } else if (
      data.weather[0].icon === "11d" ||
      data.weather[0].icon === "11n"
    ) {
      setWeatherImage(Thunder);
    } else if (
      data.weather[0].icon === "50d" ||
      data.weather[0].icon === "50n"
    ) {
      setWeatherImage(Mist);
    }
  }, [data]);

  return (
    <div className="main-container">
      <h1>{data.name}</h1>
      <div className="description">
        <p>Monday</p>
        <p>{data.weather[0].description}</p>
      </div>
      <div className="weather-icon">
        <img src={weatherImage} />
        <p>{data.main.temp} °C</p>
      </div>
      <div className="weather-details-container">
        <div className="weather-card temperature-card">
          <div className="top-row">
            <img src={Temp} alt="Feels Like" />
            <p>Feels Like</p>
          </div>
          <p className="middle-row">{data.main.feels_like} °C</p>
          <div className="bottom-row">
            <p>High: {data.main.temp_max} °C</p>
            <p>Low: {data.main.temp_min} °C</p>
          </div>
        </div>
        <div className="weather-card humidity-card">
          <div className="top-row">
            <img src={humidity} alt="Humidity" />
            <p>Humidity</p>
          </div>
          <p className="middle-row">{data.main.humidity} %</p>
          <div className="bottom-row">
            <p>Sea: {data.main.sea_level} hPa</p>
            <p>Ground: {data.main.grnd_level} hPa</p>
          </div>
        </div>
        <div className="weather-card wind-card">
          <div className="top-row">
            <img src={wind} alt="wind" />
            <p>Wind</p>
          </div>
          <p className="middle-row">
            <p>{data.wind.speed} km/h</p>
          </p>
          <div className="bottom-row">
            <p>Direction: {data.wind.deg}</p>
            <p>Gust: {data.wind.gust}</p>
          </div>
        </div>
        <div className="weather-card rain-card">
          <div className="top-row">
            <img src={cloud} alt="Cloud" />
            <p>Cloudiness</p>
          </div>
          <p className="middle-row">
            <p> {data.clouds.all} %</p>
          </p>
          <div className="bottom-row">
            <p>For the last 1hr</p>
          </div>
        </div>
        {/* <div className="weather-card humidity-card">
          <img src={humidity} alt="Humidity" />
          <p>60%</p>
          <p>Sea Level: 1234hPa</p>
          <p>Ground Level: 435hPa</p>
        </div>
        <div className="weather-card wind-card">
          <img src={wind} alt="Wind" />
          <p>12km/h</p>
          <p>Direction: 46</p>
          <p>Gust: 7547</p>
        </div>
        <div className="weather-card rain-card">
          <img src={rain} alt="Rain Amount" />
          <p>16 mm</p>
          <p>For the last 1hr</p>
        </div> */}
      </div>
    </div>
  );
};

export default city;
