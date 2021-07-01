import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-md-6">
        <div id="current-icon">
          <WeatherIcon code={props.data.icon} />
        </div>
        </div>
        <div className="col-md-6" id="current-text">
          <p className="card-text center">Currently</p>
          <div className="mt-5">
            <div className="center">
              <strong className="card-title measurement" id="current-temp">
                {Math.round(props.data.temp)}
              </strong>
              <p id="unit-btn" className="float-right">
                ºC
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          <h2 className="card-title">
            <strong>
              <em>CONDITIONS</em>
            </strong>
            <hr />
          </h2>
        </div>
        <div className="col-md-6">
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
        </div>
        <div className="col-md-6">
          <p className="card-text center weekday-weather-temps">
            <span id="min-temp">{Math.round(props.data.lowTemp)}</span>
            <br />
            <br />
            <strong className="high">
              <span id="max-temp">{Math.round(props.data.highTemp)}</span>
            </strong>
          </p>
          <hr className="low-over-high" />
        </div>
      </div>
    </div>
  );
}
