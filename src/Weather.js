import React, { useState } from "react";
import axios from "axios";
import Day from "./Day";
import Today from "./Today";
import Time from "./Time";
import Forecast from "./Forecast";

import "./Weather.css";

export default function Weather() {

  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState("Santa Monica");

  function handleSearch(event) {
    event.preventDefault();
    const apiKey = "7188b6a77c9693ed94470114f98e8761";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temp: response.data.main.temp,
      lowTemp: response.data.main.temp_min,
      highTemp: response.data.main.temp_max,
      humidity: response.data.main.humidity,
      desc: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="card holder dark">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="card left-side">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <Day date={weatherData.date} />
                        </div>
                        <div className="col-md-6">
                          <p className="card-text right">
                            <a href="/" id="location-btn">
                              <i className="fas fa-map-marker-alt location-icon"></i>
                            </a>
                            <span id="city">{weatherData.city}</span>
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-md-6">
                          <Today date={weatherData.date} />
                        </div>
                        <div className="col-md-6">
                          <Time date={weatherData.date} />
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-md-6">
                          <img
                            src={weatherData.icon}
                            alt={weatherData.desc}
                            id="current-icon"
                          />
                        </div>
                        <div className="col-md-6" id="current-text">
                          <p className="card-text center">Currently</p>
                          <div className="float-left mt-5">
                            <div className="center">
                              <strong
                                className="card-title measurement"
                                id="current-temp"
                              >
                                {Math.round(weatherData.temp)}
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
                          <h3 id="description">{weatherData.desc}</h3>
                          <ul>
                            <li>
                              Humidity:{" "}
                              <span id="humidity">{weatherData.humidity}</span>%
                            </li>
                            <li>
                              Wind:{" "}
                              <span id="wind">
                                {Math.round(weatherData.wind)}
                              </span>{" "}
                              <span id="speed">km/h</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <p className="card-text center weekday-weather-temps">
                            <span id="min-temp">
                              {Math.round(weatherData.lowTemp)}
                            </span>
                            <br />
                            <br />
                            <strong className="high">
                              <span id="max-temp">
                                {Math.round(weatherData.highTemp)}
                              </span>
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
                            <button
                              type="submit"
                              id="search-btn"
                              className="w-100"
                            >
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
                              <div className="col-12 p-0 text-center">
                                <p className="card-text">
                                  <a
                                    href="https://github.com/nicolemichel/weather-react"
                                    className="sourced"
                                  >
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
      </div>
    );
  } else {
    const apiKey = "7188b6a77c9693ed94470114f98e8761";
    let city = "Santa Monica";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);

    return <h1 className="light">Loading...</h1>;
  }
}
