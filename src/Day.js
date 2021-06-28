import React from "react";

export default function Day(props) {
  let day = props.date.getDay();
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return (
    <p className="card-text" id="current-day">
      {weekdays[day]}
    </p>
  );
}
