import Grid from "./Grid";

function WeatherForecastItem({ hours, days }) {
  return (
    <div>
      <div className="hours">
        <div className="mainGrid">
          {days &&
            days.map((d, index) => (
              <Grid key={`${index}--hourList`}>
                {d.hour &&
                  d.hour.map((h, innerIndex) => {
                    return (
                      <>
                        {index === 0 ? (
                          <span
                            key={`${index}-${innerIndex}-hourList`}
                            className="grid-item hourList"
                          >
                            {h.time.split(" ")[1]}
                          </span>
                        ) : (
                          <span className="separator"></span>
                        )}
                        <span
                          key={`${index}-${innerIndex}-temp_c`}
                          className="grid-item"
                        >
                          {h.temp_c} °C
                        </span>
                        <span
                          key={`${index}-${innerIndex}-condition-text`}
                          className="grid-item"
                        >
                          {h.condition.text} °C
                        </span>
                        <img
                          key={`${index}-${innerIndex}-condition-code`}
                          src={h.condition.icon}
                          className="grid-item imgHour"
                          alt="img"
                        />
                      </>
                    );
                  })}
              </Grid>
            ))}
        </div>
      </div>
    </div>
  );
}

export default WeatherForecastItem;
