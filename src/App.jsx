import logo from "./logo.svg";
import "./App.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Forecast from "./components/Forecast";
import { Box, Heading, Flex } from "@chakra-ui/react";
import Form from "./components/Form";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { theme, currentTheme, toggleTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    switch (currentTheme) {
      case "light":
        toggleTheme("dark");
        break;
      case "dark":
        toggleTheme("light");
        break;
      default:
        return;
    }
  };
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
        setWeather(res.data);
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
    <Box
      bgColor={theme.bgColor}
      minH="100vh"
      paddingX={12}
      paddingY={6}
      color={theme.textColor}
    >
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <Heading marginBottom={2}>Weather App</Heading>
        <Box cursor="pointer" onClick={handleToggleTheme}>
          {currentTheme === "light" ? "Dark Theme" : "Light Theme"}
        </Box>
      </Flex>
      <Form
        getWeather={getWeather}
        getWeatherByCityName={getWeatherByCityName}
      />
      {isLoading ? (
        "Loading"
      ) : (
        <Forecast timezone={weather.timezone} weather={weather.daily} />
      )}
    </Box>
  );
}

export default App;
