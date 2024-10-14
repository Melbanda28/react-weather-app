import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props){
if(props.code === "01d"){

    return (
  <ReactAnimatedWeather
    icon="CLEAR_DAY"
    color="BLACK"
    size={48}
    animate={true}
  />
);
}else{
    return (
      <ReactAnimatedWeather
        icon="CLEAR-NIGHT"
        color="black"
        size={48}
        animate={true}
      />
    );
}
}