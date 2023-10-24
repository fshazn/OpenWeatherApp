import { useEffect, useState } from "react";
import "./dashboard.css";
import City from "../components/container1/City";
import Search from "../components/container2/Search";
import Week from "../components/container3/Week";
import Arrow from "../assets/arrow.png";
import { getWeatherData, getForecast } from "../api/apiClient";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [lat, setLat] = useState(6.9271);
  const [long, setLong] = useState(79.8612);
  const [currentData, setCurrentData] = useState(null);
  const [forecast, setForecast] = useState(null);

  const getCurrentData = (lat, long) => {
    getWeatherData(lat, long).then((data) => {
      setCurrentData(data);
    });
  };
  const searchWeather = ({ lat, long }) => {
    setLat(lat);
    setLong(long);
    getWeatherData(lat, long).then((data) => {
      setCurrentData(data);
    });
    forecastData(lat, long);
  };

  const forecastData = (lat, long) => {
    getForecast(lat, long).then((data) => {
      const today = new Date().toISOString().split("T")[0];
      const dataMap = new Map();

      data.list.forEach((weatherDetail) => {
        const date = weatherDetail.dt_txt.split(" ")[0];

        if (date > today) {
          if (dataMap.has(date)) {
            dataMap.get(date).push(weatherDetail);
          } else {
            dataMap.set(date, [weatherDetail]);
          }
        }
      });

      const dataArray = [...dataMap].map(([date, data]) => ({
        date,
        data,
      }));

      setForecast(dataArray);
    });
  };

  useEffect(() => {
    getCurrentData(lat, long);
    forecastData(lat, long);
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-left-container">
        <City data={currentData} />
      </div>
      <div className="dashboard-right-container">
        <Search searchWeather={searchWeather} />
        <div className="view">
          <Link to ="/dashboard/weekforecast" state={{forecast:forecast}}>
          <h3>View More</h3>
          </Link>
          <img src={Arrow} alt="arrow" />
        </div>
        <div className="forecast-grid">
          {forecast ? (
            forecast
              .slice(0, 3)
              .map((data) => (
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
    </div>
  );
};

export default Dashboard;
