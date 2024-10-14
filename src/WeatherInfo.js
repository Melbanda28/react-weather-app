import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
 
export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <div className="float-start">
            <img
              src={props.data.iconUrl} 
              alt={props.data.description}
            />
            </div>
            <div className="float-start">
            <WeatherTemperature celcius= {props.data.temperature}/>
            </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>humidity:{props.data.humidity}%</li>
              <li>Wind:{props.data.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}