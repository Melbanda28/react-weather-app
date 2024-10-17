import React from  "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
   function handleResponse(response){
    console.log(response.data);
   }

   
   let apiKey = "a33b693cfbefd271b0ed075f9a8f65f0";
   let longitude=40.7;
   let latitude =74;
   let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
   axios.get(apiUrl).then(handleResponse);

    return (
     <div className="WeatherForecast">
       <div className="row">
         <div className="col">
           <div className="WeatherForecast-day">Thu</div>
           <WeatherIcon code="01d" size={34} />
           <div className="WeatherForecast-temperature">
             <span className="Weather-Forecast-temperaure-max">19°</span>
             <span className="WeatherForecast-temperature-min ">10°</span>
           </div>
         </div>
       </div>
     </div>
   );
}