import axios from "axios";
import { BASE_URL, API_KEY } from "./clientConfig";

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
  },
});

const getWeatherData = async (latitude, longitude) => {
  try {
    const response = await instance.get("/weather", {
      params: {
        lat: latitude,
        lon: longitude,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getForecast = async (latitude, longitude) => {
  try {
    const response = await instance.get("/forecast", {
      params: {
        lat: latitude,
        lon: longitude,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export { getWeatherData, getForecast };
