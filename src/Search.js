import { useEffect, useState } from "react";
import WeatherItem from "./WeatherItem";
import { CSSTransition } from "react-transition-group";

import { useWeather } from "./context/WeatherContext";
import { useGeolocation } from "./hooks/useGeolocation";

//&q=gebze&days=7

const BASE_URL = "https://api.weatherapi.com/v1/forecast.json?key=";

const key = "2831645116514c55bb9132837230610";

function Search() {
  const { inputSearch, dispatch, error } = useWeather();
  const { isLoading, position, getPosition } = useGeolocation();

  async function handleSearch(city) {
    const response = await fetch(`${BASE_URL}${key}&q=${city}&days=7`);

    if (!response.status === 400) {
      dispatch({ type: "dataError" });

      //throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    dispatch({ type: "dataLoaded", payload: data });
    dispatch({ type: "showAnimation" });
  }

  useEffect(
    function () {
      async function fetchGpsData() {
        const response = await fetch(
          `${BASE_URL}${key}&q=${position?.lat},${position?.lng}&days=7`
        );

        if (!response.status === 400) {
          dispatch({ type: "dataError" });

          //throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        dispatch({ type: "dataLoaded", payload: data });
        dispatch({ type: "showAnimation" });
      }
      fetchGpsData();
    },
    [position, dispatch]
  );

  console.log("error, ", error);

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <input
        className="searchInput"
        type="text"
        placeholder="Type city..."
        value={inputSearch}
        onChange={(e) =>
          dispatch({ type: "inputChange", payload: e.target.value })
        }
      />
      <button className="btn" onClick={() => handleSearch(inputSearch)}>
        Search
      </button>

      <button onClick={getPosition}>Location</button>
    </form>
  );
}

export default Search;
