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
import Grid from "./Grid";

function Hours({ hours, days }) {
  // {days &&
  //   days.map((d, index) => (
  //     <Grid key={`${index}--hourList`}>
  //       {d.hour &&
  //         d.hour.map((h, innerIndex) => {
  //           return (
  //             <>
  //               {index === 0 ? (
  //                 <span
  //                   key={`${index}-${innerIndex}-hourList`}
  //                   className="grid-item hourList"
  //                 >
  //                   {h.time.split(" ")[1]}
  //                 </span>
  //               ) : null}
  //               <span
  //                 key={`${index}-${innerIndex}-temp_c`}
  //                 className="grid-item"
  //               >
  //                 {h.temp_c} °C
  //               </span>
  //               <span
  //                 key={`${index}-${innerIndex}-condition-text`}
  //                 className="grid-item"
  //               >
  //                 {h.condition.text} °C
  //               </span>
  //               <img
  //                 key={`${index}-${innerIndex}-condition-code`}
  //                 src={h.condition.icon}
  //                 className="grid-item imgHour"
  //                 alt="img"
  //               />
  //             </>
  //           );
  //         })}
  //     </Grid>
  //   ))}

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
                          <span>-</span>
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

export default Hours;
