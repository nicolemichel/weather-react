import React, { useState } from "react";
import axios from "axios";
import Day from "./Day";
import Today from "./Today";
import Time from "./Time";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState("Santa Monica");
  const apiKey = "7188b6a77c9693ed94470114f98e8761";

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
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
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="card holder dark">
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <div className="card">
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
                      <WeatherInfo data={weatherData} />
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <div className="forecast">
                    <Forecast coordinates={weatherData.coordinates} />
                  </div>
                  <div className="card mt-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <div className="col-12 text-center">
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
    );
  } else {
    search();
    return <h1 className="light">Loading...</h1>;
  }
}
