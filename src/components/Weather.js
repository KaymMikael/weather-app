import React from "react";

const Weather = () => {
  return (
    <section className="weather-container">
      <header className="weather-header">
        <h1 className="city-name">Mataasnakahoy, Philippines</h1>
      </header>
      <section className="weather-data">
        <div className="weather-condition">
            <img src="https://openweathermap.org/img/wn/10d.png" alt="Weather Condition" className="weather-condition-icon"/>
            <p>Rain</p>
        </div>
      </section>
    </section>
  );
};

export default Weather;
