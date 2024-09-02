import { useEffect, useState } from "react";
import { fetchWeatherData } from "./api/apiRequest";
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("mataasnakahoy");
  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const data = await fetchWeatherData(cityName);
        setWeatherData(data);
      } catch (e) {
        console.log(e.message);
      }
    };

    getWeatherData();
  }, []);

  return (
    <div className="App">
      <p>{JSON.stringify(weatherData)}</p>
    </div>
  );
}

export default App;
