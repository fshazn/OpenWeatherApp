import React from "react";
import "./city.css";
import Sunny from "../../assets/Sunny.png";
import Temp from "../../assets/temp2.png";
import humidity from "../../assets/humidity.png";
import wind from "../../assets/wind.png";
import rain from "../../assets/rain2.png";

const city = () => {
  return (
    <div className="main-container">
      <div className="description">
        <p>Monday</p>
        <p>Moderate Rain</p>
      </div>
      <div className="weather-icon">
        <img src={Sunny} />
        <p>28°C</p>
      </div>
      <div className="weather-details-container">
        <div className="weather-card temperature-card">
          <div className="top-row">
            <img src={Temp} alt="Feels Like" />
            <p>Feels Like</p>
          </div>
          <p className="middle-row">30°</p>
          <div className="bottom-row">
            <p>High: 29°C</p>
            <p>Low: 18°C</p>
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
        </div>
        <div className="weather-card description-card">
          <p>Feels like a rainy day. Grab your umbrellas while heading out.</p>
        </div> */}
      </div>
    </div>
  );
};

export default city;
