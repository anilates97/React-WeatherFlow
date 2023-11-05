function ForecastDates({ weather }) {
  return (
    <div>
      <div className="dates">{weather && weather.date}</div>
    </div>
  );
}

export default ForecastDates;
