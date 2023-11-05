import { useEffect } from "react";
import "./App.css";
import Body from "./Body";
import Header from "./Header";
import { useWeather } from "./context/WeatherContext";

function App() {
  const { dispatch } = useWeather();

  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

export default App;
