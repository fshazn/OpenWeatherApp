import axios from "axios";
import { BASE_URL, API_KEY } from "./clientConfig";

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
  },
});

const fetchCurrentWeather = async () => {
  try {
    const response = await instance.get("/weather", {
      params: {
        q: "Colombo",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getWeatherData = async (latitude, longitude) => {
  try {
    const response = await instance.get("/weather", {
      params: {
        lat: latitude,
        lon: longitude,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchCurrentWeather, getWeatherData };
