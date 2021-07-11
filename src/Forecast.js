import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(response.data);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates])

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col-12">
            <div className="row">
              {forecast.map(function(dailyForecast, index) {
                if (index === 1) {
                  return (
                    <div className="col-12">
                      <div className="DailyForecast" key={index}>
                        <ForecastDay day={dailyForecast} />
                      </div>
                    </div>
                  );
                }
                if (index > 1 && index < 6) {
                  return (
                    <div className="col-6 p-3">
                      <div className="DailyForecast" key={index}>
                        <ForecastDay day={dailyForecast} />
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "7188b6a77c9693ed94470114f98e8761";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
