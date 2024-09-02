import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import WeatherContext from "../context/WeatherContext";
import { fetchWeatherData } from "../api/apiRequest";

const Form = () => {
  const { cityName, setCityName, setWeatherData, setErrorMessage } =
    useContext(WeatherContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error message when a new search begins
    setErrorMessage("");
    try {
      const data = await fetchWeatherData(cityName);
      setWeatherData(data);
      setCityName("");
    } catch (e) {
      setErrorMessage(e.message);
      setWeatherData(null);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        required
        value={cityName}
        minLength={3}
        placeholder="City name"
        className="input-city-name"
        autoComplete="off"
        onChange={(e) => setCityName(e.target.value)}
      />
      <button type="submit" className="button-search">
        <FaSearch />
      </button>
    </form>
  );
};

export default Form;
