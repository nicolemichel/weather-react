import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row text-center">
        <div className="col-md-4">
          <div id="current-icon">
            <WeatherIcon code={props.data.icon} color="#393939" size={100} />
          </div>
        </div>
        <div className="col-md-3">
          <strong>Currently</strong>
          <p className="pt-4" id="current-temp">
            {Math.round(props.data.temp)}
            <span id="unit-btn">ºC</span>
          </p>
        </div>
        <div className="col-4">
          <h3 id="description">{props.data.desc}</h3>
          <ul>
            <li>
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{Math.round(props.data.wind)}</span>{" "}
              <span id="speed">km/h</span>
            </li>
          </ul>
          <p className="card-text center weekday-weather-temps">
            <span id="min-temp">{Math.round(props.data.lowTemp)} |</span>{" "}
            <span id="max-temp">
              <strong>{Math.round(props.data.highTemp)}</strong>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
