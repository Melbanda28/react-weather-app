import React from "react";
import "./Weather.css"


export default function Weather () {
    return(
        <div className=" Weather">
        <form> 
                <input type="Search" placeholder="Enter a City" className="search-bar"/>
                <input type="submit" value="Search" className="btn btn-primary"/>
                
            </form>
        Cape Town
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
            16℃
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