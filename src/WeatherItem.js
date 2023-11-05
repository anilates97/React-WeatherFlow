import { useWeather } from "./context/WeatherContext";
import { useEffect } from "react";
import ErrorPage from "./ErrorPage";

function WeatherItem() {
  const { weather, dispatch, error, isError } = useWeather();

  const { location, current } = weather;

  useEffect(function () {
    async function fetchData() {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_KEY}&q=istanbul}&days=7`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      dispatch({ type: "dataLoaded", payload: data });
      dispatch({ type: "showAnimation" });
    }

    fetchData();
  }, []);

  return (
    <div className="weatherItem">
      {isError && <ErrorPage message={error} />}
      <h3 className="city">{location?.region}</h3>

      <h5 className="region">{location?.name}</h5>
      <div className="extends">
        <span className="time">
          <span className="extendsTitle">time:</span>{" "}
          {location?.localtime.split(" ")[1]}{" "}
        </span>
        <span className="lastUpdated">
          <span className="extendsTitle">last updated:</span>{" "}
          {current?.last_updated}
        </span>
        <h2 className="today">Today</h2>
        <span className="temp">{current?.temp_c} °C</span>
        <span className="feelsTemp">
          <span className="extendsTitle">feels temp:</span>{" "}
          {current?.feelslike_c} °C
        </span>
        <span className="condition">{current?.condition.text}</span>
        <span className="wind">
          <span className="extendsTitle">wind: </span>
          {current?.wind_kph} km
        </span>
        <span className="humidity">
          <span className="extendsTitle">humidity: </span>
          {current?.humidity}
        </span>
        <span className="pressure">
          <span className="extendsTitle">pressureMb: </span>
          {current?.pressure_mb}
        </span>
        {/* <ConvertIcon current={current} status={status} /> */}
        img ={" "}
        <img
          src={current?.condition.icon}
          alt="icon"
          className="conditionIcon"
        />
        ;
      </div>
    </div>
  );
}

export default WeatherItem;
