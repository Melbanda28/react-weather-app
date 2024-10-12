import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css"


export default function Weather (props) {
    
    const[weatherData, setWeatherData]=useState({ready: false});
   
    function handleResponse(response){;
    console.log(response.data);
    setWeatherData({
        ready:true,
    temperature:response.data.main.temp,
    wind:response.data.wind.speed,
    humidity:response.data.main.humidity,
    date:new Date(response.data.dt * 1000),
    description:response.data.weather[0].description,
    city:response.data.name});

}

if (weatherData.ready){
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="searchbar w-100"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date}/>
            </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/D200PartlySunnyV2.svg"
              alt={weatherData.description}
            />
            <span className="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="unit"> ℃</span>
          </div>
          <div className="col-6">
            <ul>
              <li>humidity:{weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}
else{
    const apiKey = "a33b693cfbefd271b0ed075f9a8f65f0";
    let city= "Cape Town";
    let apiUrl =
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return"Loading...";
}
}