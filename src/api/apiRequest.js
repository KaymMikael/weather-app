const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

export const fetchWeatherData = async (cityName) => {
  const response = await fetch(
    `${API_URL}${cityName}&appid=${process.env.REACT_APP_API_KEY}`
  );
  const data = await response.json();
  return data;
};
