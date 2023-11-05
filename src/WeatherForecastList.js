import WeatherForecast from "./WeatherForecast";
import WeatherHours from "./WeatherHours";
import { useWeather } from "./context/WeatherContext";

function WeatherForecastList() {
  const { weather, inputSearch } = useWeather();
  const { forecast } = weather;

  let items;

  if (forecast) {
    items = forecast.forecastday.map((item) => (
      <WeatherForecast key={crypto.randomUUID()} weather={item} />
    ));
  }

  return (
    <>
      <div className="forecastList">
        {weather && (
          <>
            <h1 className="forecastTitle">3 day forecast</h1>
            <span className="line"></span>
            <span className="line2"></span>

            <div className="hour">Hour</div>
          </>
        )}
        {items}
      </div>

      <WeatherHours />
    </>
  );
}

export default WeatherForecastList;
