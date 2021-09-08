import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function minTemp() {
    let minTemp = Math.round(props.day.temp.min);
    return `${minTemp}`;
  }

  function maxTemp() {
    let maxTemp = Math.round(props.day.temp.max);
    return `${maxTemp}`;
  }

  function formattedDay() {
    let date = new Date(props.day.dt * 1000);
    let today = date.getDay();

    let weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    return weekdays[today];
  }

  return (
    <div className="ForecastDay">
      <div className="card text-center">
        <div className="card-body">
          <div className="col-12 p-0">
            <p className="card-text">{formattedDay()}</p>
            <hr />
          </div>
          <div className="row text-center">
            <div className="col">
              <p className="card-text">
                <WeatherIcon
                  code={props.day.weather[0].icon}
                  color="#276893"
                  size={60}
                />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <span className="card-text center weekday-weather-temps pt-3">
                {minTemp()} |
              </span>
              <span>
                <strong> {maxTemp()}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
