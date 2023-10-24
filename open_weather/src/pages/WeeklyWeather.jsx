import React from "react";

import { useLocation } from "react-router-dom";
import Week from "../components/container3/Week";
import "./weeklyWeather.css";

const WeeklyWeather = () => {
  const data = useLocation();
  const weeklyData = data.state.forecast;

  return (
    <div className="weekly-container">
      <p className="weekly-forecast-title">Weekly Weather Forecast</p>
      <div className="weekly-forecast-grid">
        {weeklyData ? (
          weeklyData.map((data) => (
            <Week
              key={data.date}
              date={data.date}
              temp={data.data[0].main.temp}
              desc={data.data[0].weather[0].description}
              image={data.data[0].weather[0].icon}
            />
          ))
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
};

export default WeeklyWeather;
