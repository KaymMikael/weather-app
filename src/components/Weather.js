import SunriseIcon from "../assets/images/SunriseIcon.webp";
import SunsetIcon from '../assets/images/SunsetIcon.webp';
const Weather = () => {
  return (
    <section className="weather-container">
      <header className="weather-header">
        <h1 className="city-name">Mataasnakahoy, Philippines</h1>
      </header>
      <section className="weather-data">
        <div className="weather-condition">
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="Weather Condition"
            className="weather-condition-icon"
          />
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
        <div className="sun-container">
          <img src={SunriseIcon} alt="Sunrise icon" className="sun-icon"/>
          <p>6:00 AM</p>
        </div>
        <div className="sun-container">
          <img src={SunsetIcon} alt="Sunrise icon" className="sun-icon"/>
          <p>6:00 PM</p>
        </div>
      </section>
    </section>
  );
};

export default Weather;
