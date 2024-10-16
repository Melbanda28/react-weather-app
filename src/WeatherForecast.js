import React, {useState, useEffect} from  "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
  let [loaded, setLoaded]=useState(false);
  let [forecast, setForecast]= useState();
  
   useEffect(() => {
     setLoaded(false);
   }, [props.coordinates]);


  function handleResponse(response){
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
   }

   
   if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function(dailyForecast, index){
           if (index< 5){
           return (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          } else{
            return null;
          }
          })}
          
        </div>
      </div>
    );
}else
  {
    let apiKey = "a33b693cfbefd271b0ed075f9a8f65f0";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    
     return null; 
  }
}