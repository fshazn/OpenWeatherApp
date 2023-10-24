import React, { useEffect, useState } from "react";
import "./week.css";
import Sunny from "../../assets/Sunny.png";
import Clear from "../../assets/clear.png";
import Cloudy from "../../assets/cloudy.png";
import HeavyRain from "../../assets/heavyrain and storm.png";
import nightCloudy from "../../assets/night cloudy.png";
import Night from "../../assets/night.png";
import Rain from "../../assets/rain.png";
import Thunder from "../../assets/thunder.png";
import Snow from "../../assets/snow.png"
import Mist from "../../assets/mist.png"

const Week = ({date,temp,desc,image}) => {

  const [Weatherimage,setImage] = useState(Sunny);

  useEffect(()=>{
    if(image === "01d" || image === "01n"){
      setImage(Clear);
    }else if (image === "02d" || image === "02n"){
      setImage(Cloudy);
    }else if (image === "13d" || image === "13n"){
      setImage(Snow);
    }else if (image === "03d" || image === "03n"){
      setImage(nightCloudy);
    }else if (image === "04d" || image === "04n"){
      setImage(Night);
    }else if (image === "09d" || image === "09n"){
      setImage(HeavyRain);
    }else if (image === "10d" || image === "10n"){
      setImage(Rain);
    }else if (image === "11d" || image === "11n"){
      setImage(Thunder);
    }else if (image === "50d" || image === "50n"){
      setImage(Mist);
    }
  },[image])
  return (

    <div className="main-card">
      <div className="one-day">
        <p className="day">{date}</p>
        <hr className="divider" />
        <img className="day-icon" src={Weatherimage} alt="Image" />
        <p className="temp">{temp} °C</p>
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
};

export default Week;
