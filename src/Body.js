import WeatherForecastList from "./WeatherForecastList";
import WeatherItem from "./WeatherItem";

function Body() {
  return (
    <div className="content">
      <WeatherItem />
      <WeatherForecastList />
    </div>
  );
}

export default Body;
