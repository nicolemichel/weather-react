import React, { useState } from "react";

import "./UnitMeasurement.css";

export default function UnitMeasurement(props) {
  const [unit, setUnit] = useState("metric");

  function showImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function showMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function convertToImperial() {
    return Math.round((props.temp * 9) / 5 + 32);
  }

  if (unit === "metric") {
    return (
      <div className="UnitMeasurement">
        <div className="mt-5">
          <div className="center">
            <strong className="card-title measurement" id="current-temp">
              {Math.round(props.temp)}
            </strong>
            <a id="unit-btn" className="float-right" onClick={showImperial}>
              ºC
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mt-5">
        <div className="center">
          <strong className="card-title measurement" id="current-temp">
            {convertToImperial()}
          </strong>
          <a id="unit-btn" className="float-right" onClick={showMetric}>
            ºF
          </a>
        </div>
      </div>
    );
  }
}
