import React from "react";

export default function Time(props) {
    let hour = props.date.getHours();
    let minutes = props.date.getMinutes();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return (
      <p className="card-text right" id="current-time">
        {hour}
        {":"}
        {minutes}
      </p>
    );
}