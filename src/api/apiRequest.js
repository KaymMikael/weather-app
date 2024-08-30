const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

export const fetchWeatherData = async (cityName) => {
  try {
    const response = await fetch(
      `${API_URL}${cityName}&appid=${process.env.REACT_APP_API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed fetching data");
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
