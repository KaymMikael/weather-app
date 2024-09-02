import { useContext, useEffect } from "react";
import SunriseIcon from "../assets/images/SunriseIcon.webp";
import SunsetIcon from "../assets/images/SunsetIcon.webp";
import WeatherContext from "../context/WeatherContext";
import { convertUnixToTime } from "../utils/time";

const Weather = () => {
  const { weatherData } = useContext(WeatherContext);

  return (
    <section className="weather-container">
      <header className="weather-header">
        <h1 className="city-name">{`${weatherData.name}, ${weatherData.sys.country || ''}`}</h1>
      </header>
      <section className="weather-data">
        <div className="weather-condition">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt="Weather Condition"
            className="weather-condition-icon"
          />
          <p style={{textTransform:'capitalize'}}>{weatherData.weather[0].description}</p>
        </div>
        <div className="weather-degrees">
          <p>{weatherData.main.temp} &deg;c</p>
          <p>Minimum: {weatherData.main.temp_min} &deg;c</p>
          <p>Maximum: {weatherData.main.temp_max} &deg;c</p>
        </div>
        <div className="weather-wind">
          <p>Wind speed: {weatherData.wind.speed} ms</p>
          <p>Wind direction: {weatherData.wind.deg}&deg;</p>
        </div>
      </section>
      <section className="sun-data">
        <div className="sun-container">
          <img src={SunriseIcon} alt="Sunrise icon" className="sun-icon" />
          <p>{convertUnixToTime(weatherData.sys.sunrise)}</p>
        </div>
        <div className="sun-container">
          <img src={SunsetIcon} alt="Sunrise icon" className="sun-icon" />
          <p>{convertUnixToTime(weatherData.sys.sunset)}</p>
        </div>
      </section>
    </section>
  );
};

export default Weather;
