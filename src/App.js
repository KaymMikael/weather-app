import { useEffect, useState } from "react";
import { fetchWeatherData } from "./api/apiRequest";
import Form from "./components/Form";
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
      <main className="main">
        <Form />
      </main>
    </div>
  );
}

export default App;
