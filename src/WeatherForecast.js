function WeatherForecast({ weather }) {
  return (
    <div>
      <div className="dates">{weather.date}</div>
    </div>
  );
}

export default WeatherForecast;
