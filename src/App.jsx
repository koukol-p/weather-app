import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Forecast from "./components/Forecast";
import { Box } from "@chakra-ui/react";
import Form from "./components/Form";

function App() {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getWeatherByCityName = (city) => {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
      )
      .then((res) => {
        const lat = res.data[0].lat;
        const lon = res.data[0].lon;
        getWeather(lat, lon);
      });
  };
  const getWeather = (lat, lon) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
      )
      .then((res) => {
        setWeather(res.data.daily);
        setIsLoading(false);
        console.log(res.data);
      });
  };
  useEffect(() => {
    // axios.get("http://localhost:3001/data").then((res) => {
    //   // For testing purposes
    //   console.log(res.data);
    //   setWeather(res.data);
    //   setIsLoading(false);
    //   // --
    // });
  }, []);
  return (
    <Box bgColor="gray.800" minH="100vh" padding={12} color="whitesmoke">
      <header className="App-header">Weather App</header>
      <Form
        getWeather={getWeather}
        getWeatherByCityName={getWeatherByCityName}
      />
      {isLoading ? "Loading" : <Forecast weather={weather} />}
    </Box>
  );
}

export default App;
