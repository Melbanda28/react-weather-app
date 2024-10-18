import React, {useState} from "react";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css"


export default function Weather (props) {
    
    const[weatherData, setWeatherData]=useState({ready: false});
    const[city, setCity]= useState(props.defaultCity);
    
   

    function handleResponse(response){;
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates:response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });

}
function searchCity(){
  const apiKey = "a33b693cfbefd271b0ed075f9a8f65f0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);


}


function handleSubmit(event){
event.preventDefault();
searchCity();
}

function handleCityChange(event){
  setCity(event.target.value);
  
}

if (weatherData.ready){
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="searchbar w-100"
                autoFocus="on"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
        <footer>
          <p>
            This project was coded by {""}
            <a
              href="https://github.com/Melbanda28"
              target="_blank"
              rel="noreferrer"
            >
              Mellania Banda
            </a>
            {""} and is open-sourced on {""}
            <a
              href="https://github.com/Melbanda28/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            {""} and hosted on {""}
            <a
              href="https://react-weather-namhlanje.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </p>
        </footer>
      </div>
    );
}
else{
    
     searchCity();
    return"Loading...";
}
}