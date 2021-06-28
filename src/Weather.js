import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";

export default function Weather() {
  let day = new Date();
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let month = months[day.getMonth()];
  let date = day.getDate();
  let year = day.getFullYear();

  let hour = day.getHours();
  let minutes = day.getMinutes();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let [city, setCity] = useState(" ");
  let [temp, setTemp] = useState(null);
  let [lowTemp, setLowTemp] = useState(null);
  let [highTemp, setHighTemp] = useState(null);
  let [desc, setDesc] = useState(" ");
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(" ");

  function handleSearch(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7188b6a77c9693ed94470114f98e8761&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setTemp(response.data.main.temp);
    setLowTemp(response.data.main.temp_min);
    setHighTemp(response.data.main.temp_max);
    setHumidity(response.data.main.humidity);
    setDesc(response.data.weather[0].description);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }
  temp = Math.round(temp);
  lowTemp = Math.round(lowTemp);
  highTemp = Math.round(highTemp);

  return (
    <div className="container">
      <div className="card holder">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="card left-side">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="card-text" id="current-day">
                        {weekdays[day.getDay()]}
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p className="card-text right">
                        <a href="/" id="location-btn">
                          <i className="fas fa-map-marker-alt location-icon"></i>
                        </a>
                        <span id="city">{city}</span>
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <p className="card-text" id="current-full-date">
                        {month} {date}
                        {", "}
                        {year}
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p className="card-text right" id="current-time">
                        {hour}
                        {":"}
                        {minutes}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <img src={icon} alt={desc} id="current-icon" />
                    </div>
                    <div className="col-md-6" id="current-text">
                      <p className="card-text center">Currently</p>
                      <div className="float-left mt-5">
                        <div className="center">
                          <strong
                            className="card-title measurement"
                            id="current-temp"
                          >
                            {temp}
                          </strong>
                          <p id="unit-btn">ºC</p>
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
                      <h3 id="description">{desc}</h3>
                      <ul>
                        <li>
                          Humidity: <span id="humidity">{humidity}</span>%
                        </li>
                        <li>
                          Wind: <span id="wind">{wind}</span>{" "}
                          <span id="speed">km/h</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <p className="card-text center weekday-weather-temps">
                        <span id="min-temp">{lowTemp}</span>
                        <br />
                        <br />
                        <strong className="high">
                          <span id="max-temp">{highTemp}</span>
                        </strong>
                      </p>
                      <hr className="low-over-high" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card right-side">
                <div className="card-body">
                  <form id="search-form" onSubmit={handleSearch}>
                    <div className="row">
                      <div className="col-10">
                        <input
                          type="search"
                          placeholder="Enter a city.."
                          className="form-control w-100"
                          id="city-input"
                          autoComplete="off"
                          onChange={updateCity}
                        />
                      </div>
                      <div className="col-2">
                        <button type="submit" id="search-btn" className="w-100">
                          <i className="fas fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="forecast">
                    <Forecast />
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="card dark">
                        <div className="card-body">
                          <div className="col-12">
                            <p className="card-text">
                              <a href="https://github.com/nicolemichel/weather-react">
                                Open Source Code
                              </a>
                              <span> by Nicole Michel</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
