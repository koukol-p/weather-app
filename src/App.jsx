import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=Praha&limit=1&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
      )
      .then((res) => {
        const lat = res.data[0].lat;
        const lon = res.data[0].lon;
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
          )
          .then((res) => {
            setWeather(res.data);
            console.log(res.data);
          });
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
