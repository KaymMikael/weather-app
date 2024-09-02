import React from "react";

const Weather = () => {
  return (
    <section className="weather-container">
      <header className="weather-header">
        <h1 className="city-name">Mataasnakahoy, Philippines</h1>
      </header>
      <section className="weather-data">
        <div className="weather-condition">
            <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="Weather Condition" className="weather-condition-icon"/>
            <p>Rain</p>
        </div>
        <div className="weather-degrees">
            <p>21.0 &deg;c</p>
            <p>Minimum: 21.0 &deg;c</p>
            <p>Maximum: 21.0 &deg;c</p>
        </div>
        <div className="weather-wind">
            <p>Wind speed: 0.62 ms</p>
            <p>Wind direction: 349</p>
        </div>
      </section>
      <section className="sun-data">
        
      </section>
    </section>
  );
};

export default Weather;
