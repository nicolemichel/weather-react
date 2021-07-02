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
      <div className="card dark">
        <div className="card-body">
          <div className="col-12 p-0">
            <p className="card-text">{formattedDay()}</p>
            <hr />
          </div>
          <div className="row">
            <div className="col-6">
              <p className="card-text">
                <WeatherIcon
                  code={props.day.weather[0].icon}
                  color="#f2f2f1"
                  size={80}
                />
              </p>
            </div>
            <div className="col-6">
              <p className="card-text center weekday-weather-temps pt-3">
                {minTemp()}
                <br />
                <strong className="high">{maxTemp()}</strong>
              </p>
              <hr className="low-over-high" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
