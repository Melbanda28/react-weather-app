import React from "react";
import "./Weather.css"


export default function Weather () {
    return(
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
        <h1>Cape Town</h1>
        <ul>
          <li>Tuesday:1700</li>
          <li>Partly cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/D200PartlySunnyV2.svg"
              alt="partly sunny"
            />
            <span className="temperature" >16</span> 
            <span className="unit"> ℃</span>
          </div>
          <div className="col-6">
            <ul>
              <li>humidity:30%</li>
              <li>precipitation:50%</li>
              <li>Wind:20km/h</li>
            </ul>
          </div>
        </div>
      </div>
    )
}