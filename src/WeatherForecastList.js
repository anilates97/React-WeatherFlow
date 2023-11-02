import WeatherForecast from "./WeatherForecast";
import { useWeather } from "./context/WeatherContext";

function WeatherForecastList() {
  const { weather, dispatch, inputSearch } = useWeather();
  const { forecast } = weather;

  let item;

  if (forecast) {
    item = forecast.forecastday.map((item) => (
      <WeatherForecast key={item.hour.time_epoch} weather={item} />
    ));
  }

  return (
    <div className="forecastList">
      {inputSearch && forecast && (
        <>
          <h1 className="forecastTitle">3 day forecast</h1>
          <span className="line"></span>
          <span className="line2"></span>
        </>
      )}
      {inputSearch && forecast && item}
    </div>
  );
}

export default WeatherForecastList;
