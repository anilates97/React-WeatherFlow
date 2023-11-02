import { useWeather } from "./context/WeatherContext";
import { CSSTransition } from "react-transition-group";
import iconWeather from "../src/img/clear-sky.png";

function WeatherItem() {
  const { weather, showContent, status } = useWeather();
  const { location, current, forecast } = weather;

  let img;
  if (status === "loaded") {
    if (current.condition.text.toLowerCase() === "clear") {
      img = <img src={iconWeather} alt="icon" className="conditionIcon" />;
    }
  }

  return (
    <CSSTransition
      in={showContent}
      timeout={300}
      classNames="myclass"
      unmountOnExit
    >
      {status === "loaded" && (
        <div className="weatherItem">
          <h3 className="city">{location.region}</h3>
          <h5 className="region">{location.name}</h5>
          <div className="extends">
            <span className="lat">latitude: {location.lat}</span>
            <span className="lon">longitude:{location.lon}</span>

            <span className="time">
              time: {location.localtime.split(" ")[1]}{" "}
            </span>
            <h2 className="today">Today</h2>
            <span className="temp">temp: {current.temp_c} °C</span>
            <span className="condition">
              condition: {current.condition.text}
            </span>
            <span className="lastUpdated">
              last updated: {current.last_updated}
            </span>
            <span className="wind">wind: {current.wind_kph} km</span>
            <span className="feelsTemp">
              feels temp: {current.feelslike_c} °C
            </span>
            {/* <ConvertIcon current={current} status={status} /> */}
            {img}
          </div>
        </div>
      )}
    </CSSTransition>
  );
}

export default WeatherItem;
