import { useContext } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";
import WeatherContext from "./context/WeatherContext";

function App() {
  const { weatherData, errorMessage } = useContext(WeatherContext);
  const informationStyle = {
    textAlign: "center",
    color: "red",
    marginTop: "12px",
  };

  return (
    <div className="App">
      <main className="main">
        <Form />
        {errorMessage && <p style={informationStyle}>{errorMessage}</p>}
        {!errorMessage && weatherData ? (
          <Weather />
        ) : (
          <p style={informationStyle}>Search city to display data</p>
        )}
      </main>
    </div>
  );
}

export default App;
