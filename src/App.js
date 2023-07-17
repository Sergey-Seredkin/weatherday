import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";



function App() {
  const [visibleLedger, setVisibleLedger] = useState(true);
  const [visibleSelect, setVisibleSelect] = useState(true);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [cityObject, setCityObject] = useState("");
  const [currentCity, setCurrentCity] = useState("--");
  const [resultWeather, setResultWeather] = useState(new Map());
 
  const handleLatitudeChange = (e) => {
    setLatitude(e.target.value);
  };
  const handleLongitudeChange = (e) => {
    setLongitude(e.target.value);
  };
  const handleCityObjectChange = (e) => {
    setCityObject(e.target.value);
  };

  const visibleToggle = (res) => {
    setVisibleLedger(res);
  };
 
    const cheskWeather = async (e) => {
      //console.log('method fetch weather');
      e.preventDefault();
      const requestOptions = {
        method: "GET",
        headers: {
          "X-Gismeteo-Token": "56b30cb255.3443075",
          "Accept-Encoding": "gzip",
          "Access-Control-Allow-Origin": "https://api.gismeteo.net",
        },
      };
   
      const apiUrl = fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityObject},ru&appid=1e5170a66c240dfb57a00f50da9477b3`
      )
        .then((response) => response.json())
        .then((data) => {
          setResultWeather(data);
          setCurrentCity(cityObject);
        }); 
    console.log(cityObject)
    };
 
    const func2 = (myObj) => {
      Object.entries(myObj).map(([key, value]) => {
        if (Object.prototype.toString.call(value) !== "[object Object]") {
          console.log(console.log(key + " " + value));
        } else {
          Object.entries(value).map(([key2, value2]) => {
            if (Object.prototype.toString.call(value2) !== "[object Object]") {
              console.log(console.log(key2 + " " + value2));
            }
          });
        }
      });
    };
  
    const func = (myObj) => {
      Object.entries(myObj).map(([key, value]) => {
        if (Object.prototype.toString.call(value) === "[object Object]") {
          console.log("Ключ группы " + key);
          func2(value);
        } else if (Object.prototype.toString.call(value) === "[object Array]") {
          func2(value);
          console.log("Ключ группы " + key);
        } else {
          console.log(key + "--" + value);
        }
      });
    };
  
    const func6 = (myObj, key_find) => {
      Object.entries(myObj).map(([key, value]) => {
        if (Object.prototype.toString.call(value) !== "[object Object]") {
          if (key === key_find) {
            console.log(console.log(key + " " + value));
            return value;
          }
        } else {
          Object.entries(value).map(([key2, value2]) => {
            if (Object.prototype.toString.call(value2) !== "[object Object]") {
              if (key === key_find) {
                console.log(console.log(key2 + " " + value2));
                return value;
              }
            }
          });
        }
      });
    };
  
    const func5 = (key_main, key_find) => {
      Object.entries(resultWeather).map(([key, value]) => {
        if (Object.prototype.toString.call(value) === "[object Object]") {
          if (key === key_main) {
            var value_f = func6(value, key_find);
            console.log("Ключ группы " + key);
            return value_f;
          }
        } else if (Object.prototype.toString.call(value) === "[object Array]") {
          if (key === key_main) {
            var value_f = func6(value);
            console.log("Ключ группы " + key);
            return value_f;
          }
        } else {
          if (key === key_main) {
            var value_f = value;
            console.log(key + " " + value);
            return value_f;
          }
        }
      });
    };
    const addhistoricWeather = () => {
      var json_data = require("../src/historicaldata/weather.json");
      func(json_data)
     };
  
     if (resultWeather.size === 0) {
      var currentCountry = "--";
      // var currentCity = " --";
      var temp0 = "";
      var temp1 = "";
    } else {
      var currentCountry = resultWeather["sys"]["country"];
      //var currentCountry = "RU"
      var temp0 = (parseFloat(resultWeather["main"]["temp"]) - 273.15)
        .toFixed(1)
        .split(".")[0];
      var temp1 =
        "," +
        parseFloat(resultWeather["main"]["temp"] - 273.15)
          .toFixed(1)
          .split(".")[1];
          var humidity = resultWeather["main"]["humidity"];
          var pressure = resultWeather["main"]["pressure"];
          var speed = resultWeather["wind"]["speed"];
          var deg = resultWeather["wind"]["deg"];
          var gust = resultWeather["wind"]["gust"];
        };
      
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React SPS
        </a>
      </header> */}
      <div>
      {visibleSelect === true ? (
        <div>
          {/* <Header /> */}
          {/* <ModalExample1 visibleToggleLedgerWindow={visibleToggle} /> */}
        </div>
      ) : undefined}
      {visibleLedger === true ? (
        <div>
          <head>
            <meta charset="utf-8" />
            <title>Form Weather</title>
            <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
            ></link>
          </head>
          <body>
            <div class="container-fluid mt-3">
              <h4 class="mb-2">OPENWEATHERMAP:API</h4>
              <form>
                <div class="form-row">
                  <div class="form-group col-sm-6">
                    <label for="latitude">Широта</label>
                    <input
                      type="text"
                      class="form-control"
                      //onChange={this.handleLatitudeChange}класс
                      onChange={handleLatitudeChange}
                      id="inputLatitude"
                      placeholder="Широта от -90 до 90"
                    />
                  </div>
                  <div class="form-group col-sm-6">
                    <label for="longitude">Долгота</label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={handleLongitudeChange}
                      id="inputLongitude"
                      placeholder="Долгота от -180 до 180"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-sm-6">
                    <label for="nameCity">
                      Наименование географического объекта
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={handleCityObjectChange}
                      id="inputNameCity"
                      placeholder="Name City"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={cheskWeather}
                >
                  Сheck the Weather
                </button>
              </form>
              <p></p>
              <button class="btn btn-secondary" onClick={addhistoricWeather}>
                Add historic weather data
              </button>
            </div>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
          </body>

          <div
            class="tab-content"
            style={{ "margin-left": "25px", marginTop: "15px" }}
          >
            <div>
              Weather in{" "}
              <span style={{ color: "green", "font-weight": "bold" }}>
                {currentCity}
              </span>{" "}
              today Contry ={" "}
              <span style={{ color: "red", "font-weight": "bold" }}>
                {currentCountry}
              </span>
            </div>
            <div class="date">Сейчас</div>
            <div class="day" data-pattern="G:i">
              {new Date().toLocaleTimeString()}
            </div>
            <div>Main</div>
            <div class="weather">
              <div
                class="weather-value"
                style={{
                  "background-color": "rgba(48, 201, 255, 0.25)",
                  width: "400px",
                  height: "200px",
                }}
              >
                <span class="unit unit_temperature_c">
                  <span
                    class="sign"
                    style={{
                      color: "blue",
                      "font-weight": "bold",
                      "font-size": "50px",
                    }}
                  >
                    {" "}
                    {temp0}
                  </span>
                  <span
                    class="lower"
                    style={{
                      color: "blue",
                      "font-size": "30px",
                      "font-weight": "bold",
                    }}
                  >
                    {temp1}
                  </span>{" "}
                </span>
                <div
                  class="weather-feel white"
                  style={{ backgroundcolor: "rgba(20, 107, 255, 0.7)" }}
                >
                  По ощущению {" "}
                  <span class="measure">
                    <span class="unit unit_temperature_c"> {temp0} </span>
                  </span>
                </div>
                <div class="tab-image">
                  <div class="tab-icon">
                    <svg viewBox="0 0 300 300">
                      <use xlinkHref="#c4_s2">
                        <symbol viewBox="0 0 300 300" id="c4_s2">
                          <g fill="none">
                            <path
                              d="M47.001 23a9.97 9.97 0 01-3.007 7.148c-.116-2.68-1.625-5.12-3.956-6.369-.318-2.76-2.167-5.041-4.635-5.944l-.079-.65c-.496-4.1-3.86-7.256-7.868-7.256-.647 0-1.296.085-1.934.25a9.909 9.909 0 00-3.55-2.473A9.5 9.5 0 0138.997 13.2C43.563 14.124 47 18.16 47 23zm-42 1.27c0-.086-.003-.184 0-.27.099-3.06 1.936-5.829 4.629-6.963l.821-.347.172-.919C11.363 11.847 14.63 9 18.386 9c2.194 0 4.309.98 5.802 2.687l.673.77.954-.283a5.738 5.738 0 011.64-.245c2.983 0 5.507 2.389 5.884 5.497a6.9 6.9 0 00-1.838.172A8.627 8.627 0 0025.358 15c-4.06 0-7.573 2.9-8.488 6.919-2.938 1.347-4.869 4.39-4.869 7.696 0 .827.123 1.627.35 2.383-3.965-.092-7.35-3.496-7.35-7.728zm33.131.808l.738.351c1.903.908 3.131 2.89 3.131 5.053 0 3.068-2.676 5.518-5.635 5.518H20.378a4.566 4.566 0 01-.377 0c-3.262-.198-6-2.971-6-6.385 0-2.611 1.579-5.012 3.928-5.976l.697-.287.145-.759C19.4 19.352 22.17 17 25.358 17c1.862 0 3.656.809 4.923 2.22l.571.636.81-.234a4.99 4.99 0 011.392-.202c2.62 0 4.825 2.117 5.018 4.818z"
                              fill="#ddd"
                            ></path>
                            <path d="M0 0h50v55H0z"></path>
                            <path
                              d="M33.959 42.032l1.65-1.636a.333.333 0 000-.47l-.048-.047a.331.331 0 00-.47-.003l-1.653 1.638-.55-2.26a.335.335 0 00-.405-.244l-.064.016a.337.337 0 00-.248.403l.566 2.306-2.307-.563a.337.337 0 00-.405.245l-.014.064a.33.33 0 00.245.403l2.254.55-1.647 1.635a.338.338 0 00-.003.473l.048.047c.13.13.34.13.47.003l1.652-1.642.555 2.264a.332.332 0 00.402.244l.064-.014a.332.332 0 00.247-.403l-.563-2.306 2.305.562a.333.333 0 00.402-.244l.017-.064a.335.335 0 00-.244-.404zm-5 8l1.65-1.636a.333.333 0 000-.47l-.048-.047a.331.331 0 00-.47-.003l-1.653 1.638-.55-2.26a.335.335 0 00-.405-.244l-.064.016a.337.337 0 00-.248.403l.566 2.306-2.307-.563a.337.337 0 00-.405.245l-.014.064a.33.33 0 00.245.403l2.254.55-1.647 1.635a.338.338 0 00-.003.473l.048.047c.13.13.34.13.47.003l1.652-1.642.555 2.264a.332.332 0 00.402.244l.064-.014a.332.332 0 00.247-.403l-.563-2.306 2.305.562a.333.333 0 00.402-.244l.017-.064a.335.335 0 00-.244-.404zm-8-8l1.65-1.636a.333.333 0 000-.47l-.048-.047a.331.331 0 00-.47-.003l-1.653 1.638-.55-2.26a.335.335 0 00-.405-.244l-.064.016a.337.337 0 00-.248.403l.566 2.306-2.307-.563a.337.337 0 00-.405.245l-.014.064a.33.33 0 00.245.403l2.254.55-1.647 1.635a.338.338 0 00-.003.473l.048.047c.13.13.34.13.47.003l1.652-1.642.555 2.264a.332.332 0 00.402.244l.064-.014a.332.332 0 00.247-.403l-.563-2.306 2.305.562a.333.333 0 00.402-.244l.017-.064a.335.335 0 00-.244-.404zm-5 8l1.65-1.636a.333.333 0 000-.47l-.048-.047a.331.331 0 00-.47-.003l-1.653 1.638-.55-2.26a.335.335 0 00-.405-.244l-.064.016a.337.337 0 00-.248.403l.566 2.306-2.307-.563a.337.337 0 00-.405.245l-.014.064a.33.33 0 00.245.403l2.254.55-1.647 1.635a.338.338 0 00-.003.473l.048.047c.13.13.34.13.47.003l1.652-1.642.555 2.264a.332.332 0 00.402.244l.064-.014a.332.332 0 00.247-.403l-.563-2.306 2.305.562a.333.333 0 00.402-.244l.017-.064a.335.335 0 00-.244-.404z"
                              fill="#09f"
                            ></path>
                          </g>
                        </symbol>
                      </use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h5>Сoordinates {cityObject}</h5>
          <h5>Temperature Pressure Humidity</h5>
          <h8>humidity - {humidity}</h8>
          <h8>pressure - {pressure}</h8>
          <h5>Wind</h5>
          <h8>speed - {speed}</h8>
          <h8>deg - {deg}</h8>
          <h8>gust - {gust}</h8>
          <h5>Snow</h5>
          <h5>Clouds</h5>
        </div>
      ) : undefined}
    </div>

    </div>
  );
}

export default App;
