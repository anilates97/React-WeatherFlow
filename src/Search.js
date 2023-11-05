import { useEffect } from "react";

import { useWeather } from "./context/WeatherContext";
import { useGeolocation } from "./hooks/useGeolocation";

function Search() {
  const { inputSearch, dispatch } = useWeather();
  const { position, getPosition } = useGeolocation();

  async function handleSearch(city) {
    try {
      if (!city) {
        throw new Error("Invalid city value");
      }
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_KEY}&q=${city}&days=7`
      );

      if (!response.ok) {
        dispatch({ type: "resetInput" });
        const errorResponse = await response.json();

        if (errorResponse.error.code === 1006) {
          throw new Error("No matching location found.");
        }
      }
      const data = await response.json();

      dispatch({ type: "dataLoaded", payload: data });
    } catch (e) {
      dispatch({ type: "dataError", payload: e.message });
      console.log(e.message);
    }
  }

  useEffect(
    function () {
      async function fetchGpsData() {
        let gpsUrl = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_KEY}&q=${position?.lat},${position?.lng}&days=7`;
        let currentUrl = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_KEY}&q=istanbul&days=7`;

        const response = await fetch(position ? gpsUrl : currentUrl);

        console.log(response.status);

        if (response.status === 400) {
          console.log("ghataaaaaaa");
          dispatch({ type: "dataError" });
          return;
        }

        const data = await response.json();

        dispatch({ type: "dataLoaded", payload: data });
        dispatch({ type: "showAnimation" });
      }
      fetchGpsData();
    },
    [position, dispatch]
  );

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

      <button className="btn btn-primary" onClick={getPosition}>
        Location
      </button>
    </form>
  );
}

export default Search;
