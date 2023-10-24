import React, { useState } from "react";
import "./search.css"

const search = ({searchWeather}) => {

  const[lat,setLat] = useState("");
  const[long,setLong] = useState("");
  const [error, setError] = useState("");

  const searchData = () =>{
    if(lat.trim() === "" || long.trim() === ""){
      setError("Fill the fields!")
    }else{
      setError("")
      searchWeather({lat, long});
    }
  }

  return (
      <div className="search-city">
          <div className="search-group">
            <label htmlFor="Latitude">Latitude</label>
            <input
              type="text"
              id="Latitude"
              placeholder="Enter the latitude"
              value={lat}
              onChange={(e) =>{
                setLat(e.target.value)
              }}
            />
          </div>
          <div className="search-group">
            <label htmlFor="Longtitude">Longitude</label>
            <input
              type="text"
              id="Longtitude"
              placeholder="Enter the longtitude"
              value={long}
              onChange={(e) =>{
                setLong(e.target.value)
              }}
            />
          </div>
          <button className="search-button" type="search" onClick={searchData}>Search</button>
          {error && <p>{error}</p>}
      </div>
  );
};

export default search;
