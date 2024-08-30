import { useEffect, useState } from "react";
import { fetchWeatherData } from "./api/apiRequest";
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("mataasnakahoy");
  useEffect(() => {
    const getWeatherData = async () => {
      const data = await fetchWeatherData(cityName);
      setWeatherData(data);
    }
    getWeatherData();
  },[]);

  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
