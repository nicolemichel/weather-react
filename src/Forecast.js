import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-12">
          <div className="card dark">
            <div className="card-body">
              <div className="col-12">
                <p className="card-text">Monday</p>
                <hr />
              </div>
              <div className="row">
                <div className="col-6">
                  <p className="card-text">
                    <img src="" />
                  </p>
                </div>
                <div className="col-6">
                  <p className="card-text center weekday-weather-temps">
                    20
                    <br />
                    <strong className="high">27</strong>
                  </p>
                  <hr className="low-over-high" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="card dark">
            <div className="card-body">
              <div className="col-12">
                <p className="card-text">Tuesday</p>
                <hr />
              </div>
              <div className="row">
                <div className="col-6">
                  <p className="card-text">
                    <img src="" alt="weather icon" width="100px" />
                  </p>
                </div>
                <div className="col-6">
                  <p className="card-text center weekday-weather-temps">
                    16
                    <br />
                    <strong className="high">24</strong>
                  </p>
                  <hr className="low-over-high" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card dark">
            <div className="card-body">
              <div className="col-12">
                <p className="card-text">Wednesday</p>
                <hr />
              </div>
              <div className="row">
                <div className="col-6">
                  <p className="card-text">
                    <img src="" alt="weather icon" width="100px" />
                  </p>
                </div>
                <div className="col-6">
                  <p className="card-text center weekday-weather-temps">
                    8
                    <br />
                    <strong className="high">12</strong>
                  </p>
                  <hr className="low-over-high" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="card dark">
            <div className="card-body">
              <div className="col-12">
                <p className="card-text">Thursday</p>
                <hr />
              </div>
              <div className="row">
                <div className="col-6">
                  <p className="card-text">
                    <img src="" alt="weather icon" width="100px" />
                  </p>
                </div>
                <div className="col-6">
                  <p className="card-text center weekday-weather-temps">
                    18
                    <br />
                    <strong className="high">21</strong>
                  </p>
                  <hr className="low-over-high" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card dark">
            <div className="card-body">
              <div className="col-12">
                <p className="card-text">Friday</p>
                <hr />
              </div>
              <div className="row">
                <div className="col-6">
                  <p className="card-text">
                    <img src="" alt="weather icon" width="100px" />
                  </p>
                </div>
                <div className="col-6">
                  <p className="card-text center weekday-weather-temps">
                    15
                    <br />
                    <strong className="high">23</strong>
                  </p>
                  <hr className="low-over-high" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
