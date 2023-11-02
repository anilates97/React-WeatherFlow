import { useWeather } from "./context/WeatherContext";
import { CSSTransition } from "react-transition-group";
import clearSky from "../src/img/clear-sky.png";
import partlyCloudy from "../src/img/partly-cloudy.png";
import cloudy from "../src/img/clouds.png";
import overcast from "../src/img/overcast.png";
import mist from "../src/img/mist.png";
import patchyRain from "../src/img/mist.png";
import patchySnow from "../src/img/snow.png";
import sleet from "../src/img/sleet.png";
import drizzle from "../src/img/drizzle.png";
import thunderStorm from "../src/img/thunderstorm.png";
import blowSnowy from "../src/img/blowSnowy.png";
import blizzard from "../src/img/blizzard.png";
import fog from "../src/img/fog.png";
import lightRain from "../src/img/light-rain.png";
import heavyRain from "../src/img/heavy-rain.png";
import thunderRain from "../src/img/thunderRain.png";
import moderateRain from "../src/img/moderateRain.png";

function WeatherItem() {
  const { weather, showContent, status } = useWeather();
  const { location, current, forecast } = weather;

  let img;
  if (status === "loaded") {
    if (current.condition.text.toLowerCase() === "clear") {
      img = <img src={clearSky} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "sunny") {
      img = <img src={clearSky} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "partly cloudy") {
      img = <img src={partlyCloudy} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "cloudy") {
      img = <img src={cloudy} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "overcast") {
      img = <img src={overcast} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "mist") {
      img = <img src={mist} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Patchy rain possible") {
      img = <img src={patchyRain} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Patchy snow possible") {
      img = <img src={patchySnow} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Patchy sleet possible") {
      img = <img src={sleet} alt="icon" className="conditionIcon" />;
    }
    if (
      current.condition.text.toLowerCase() ===
      "Patchy freezing drizzle possible"
    ) {
      img = <img src={sleet} alt="icon" className="conditionIcon" />;
    }
    if (
      current.condition.text.toLowerCase() === "Thundery outbreaks possible"
    ) {
      img = <img src={thunderStorm} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Blowing snow") {
      img = <img src={blowSnowy} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Blizzard") {
      img = <img src={blizzard} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "fog") {
      img = <img src={fog} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Freezing fog") {
      img = <img src={fog} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Patchy light drizzle") {
      img = <img src={drizzle} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "light drizzle") {
      img = <img src={drizzle} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Freezing drizzle") {
      img = <img src={drizzle} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Heavy freezing drizzle") {
      img = <img src={drizzle} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Patchy light rain") {
      img = <img src={lightRain} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Light rain") {
      img = <img src={lightRain} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Moderate rain at times") {
      img = <img src={moderateRain} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Heavy rain") {
      img = <img src={heavyRain} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Light freezing rain") {
      img = <img src={heavyRain} alt="icon" className="conditionIcon" />;
    }
    if (
      current.condition.text.toLowerCase() === "Moderate or heavy freezing rain"
    ) {
      img = <img src={heavyRain} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text === "Moderate or heavy rain shower") {
      img = <img src={heavyRain} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Light sleet") {
      img = <img src={sleet} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Moderate or heavy sleet") {
      img = <img src={sleet} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Patchy light snow") {
      img = <img src={patchySnow} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Light snow") {
      img = <img src={patchySnow} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Patchy moderate snow") {
      img = <img src={patchySnow} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Patchy heavy snow") {
      img = <img src={patchySnow} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Heavy snow") {
      img = <img src={blowSnowy} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Ice pellets") {
      img = <img src={blowSnowy} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Light rain shower") {
      img = <img src={lightRain} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Torrential rain shower") {
      img = <img src={lightRain} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Light sleet showers") {
      img = <img src={sleet} alt="icon" className="conditionIcon" />;
    }
    if (
      current.condition.text.toLowerCase() === "Moderate or heavy sleet showers"
    ) {
      img = <img src={sleet} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Light snow showers") {
      img = <img src={patchySnow} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text.toLowerCase() === "Light snow showers") {
      img = <img src={patchySnow} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text === "Moderate or heavy showers of ice pellets") {
      img = <img src={blowSnowy} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text === "Patchy light rain with thunder") {
      img = <img src={thunderRain} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text === "Moderate or heavy rain with thunder") {
      img = <img src={thunderRain} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text === "Patchy light snow with thunder") {
      img = <img src={thunderStorm} alt="icon" className="conditionIcon" />;
    }
    if (current.condition.text === "Moderate or heavy snow with thunder") {
      img = <img src={blowSnowy} alt="icon" className="conditionIcon" />;
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
            <span className="time">
              <span className="extendsTitle">time:</span>{" "}
              {location.localtime.split(" ")[1]}{" "}
            </span>
            <span className="lastUpdated">
              <span className="extendsTitle">last updated:</span>{" "}
              {current.last_updated}
            </span>
            <h2 className="today">Today</h2>
            <span className="temp">{current.temp_c} °C</span>
            <span className="feelsTemp">
              <span className="extendsTitle">feels temp:</span>{" "}
              {current.feelslike_c} °C
            </span>
            <span className="condition">{current.condition.text}</span>

            <span className="wind">
              <span className="extendsTitle">wind: </span>
              {current.wind_kph} km
            </span>
            <span className="humidity">
              <span className="extendsTitle">humidity: </span>
              {current.humidity}
            </span>
            <span className="pressure">
              <span className="extendsTitle">pressureMb: </span>
              {current.pressure_mb}
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
