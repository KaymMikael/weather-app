import { useState } from "react";
import { createContext } from "react";

const WeatherContext = createContext({});

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        cityName,
        setCityName,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
