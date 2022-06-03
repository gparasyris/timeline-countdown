import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import StopwatchDisplay from "./StopWatchDisplay.jsx";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(duration);
dayjs.extend(relativeTime);
// dayjs.extend(duration);
// dayjs.extend(relativeTime);
// import StopwatchHistory from './StopwatchHistory.jsx';
let watch;
let globalState = {};
export const Stopwatch = ({ date = "2022-04-15", ...rest }) => {
  // constructor(props) {
  // super(props);

  let startTime = new Date("2022-04-15");
  let endTime = new Date();
  let timeDiffInMs = Math.floor(endTime - startTime);

  const convertTime = (time) => {
    var ms = parseInt((time % 1000) / 100),
      s = parseInt((time / 1000) % 60),
      m = parseInt((time / (1000 * 60)) % 60),
      h = parseInt((time / (1000 * 60 * 60)) % 24),
      d = parseInt((time / (1000 * 60 * 60 * 24)) % 7),
      w = parseInt(time / (1000 * 60 * 60 * 24 * 7));
    return {
      currentTimeMs: ms,
      currentTimeSec: s,
      currentTimeMin: m,
      currentHr: h,
      currentDay: d,
      currentWeek: w,
    };
  };

  globalState = {
    running: false,
    currentTimeMs: 0,
    currentTimeSec: 0,
    currentTimeMin: 0,
    currentHr: 0,
    currentDay: 0,
    currentWeek: 0,
    ...convertTime(timeDiffInMs),
  };

  const [lstate, setlstate] = useState(globalState);

  // this.state = {
  //   running: false,
  //   currentTimeMs: 0,
  //   currentTimeSec: 0,
  //   currentTimeMin: 0,
  //   currentHr: 0,
  //   currentDay: 0,
  //   currentWeek: 0,
  //   ...this.convertTime(timeDiffInMs),
  // };
  // this.start();
  // }

  const formatTime = (val, ...rest) => {
    if (val == null) return "00";
    let value = val.toString();
    if (value.length < 2) {
      value = "0" + value;
    }
    if (rest[0] === "ms") {
      if (value.length < 3) {
        value = "0" + value;
      }
      if (value.length > 2) {
        value = value.substring(0, 2);
      }
    }
    return value;
  };

  const pace = () => {
    // this.setState({ currentTimeMs: this.state.currentTimeMs + 100 });
    // if (this.state.currentTimeMs >= 1000) {
    //   this.setState({ currentTimeSec: this.state.currentTimeSec + 1 });
    //   this.setState({ currentTimeMs: 0 });
    // }
    // if (this.state.currentTimeSec == 60) {
    //   this.setState({ currentTimeMin: this.state.currentTimeMin + 1 });
    //   this.setState({ currentTimeSec: 0 });
    // }
    // if (this.state.currentTimeMin == 60) {
    //   this.setState({ currentHr: this.state.currentHr + 1 });
    //   this.setState({ currentTimeMin: 0 });
    // }
    // if (this.state.currentHr == 24) {
    //   this.setState({ currentDay: this.state.currentDay + 1 });
    //   this.setState({ currentDay: 0 });
    // }
    let currentTimeMs = lstate.currentTimeMs + 100;
    let { currentDay, currentHr, currentTimeMin, currentTimeSec } = lstate;
    if (currentTimeMs >= 1000) {
      currentTimeSec += 1;
      currentTimeMs = 0;
    }
    if (currentTimeSec == 60) {
      currentTimeMin += 1;
      currentTimeSec = 0;
    }
    if (currentTimeMin == 60) {
      currentHr += 1;
      currentTimeMin = 0;
    }
    if (currentHr == 24) {
      currentDay += 1;
      currentHr = 0;
    }
    globalState = {
      ...lstate,
      currentDay,
      currentHr,
      currentTimeMin,
      currentTimeSec,
      currentTimeMs,
    };
    setlstate(globalState);
    // console.log(newstate);
  };

  const start = () => {
    if (!lstate.running) {
      setlstate({ ...lstate, running: true });
      setInterval(() => pace(), 100);
    }
  };

  // const stop = () => {
  //   this.setlstate({ ...lstate, running: false });
  //   clearInterval(watch);
  // };

  // reset = () => {
  //   this.setState({
  //     currentTimeMs: 0,
  //     currentTimeSec: 0,
  //     currentTimeMin: 0,
  //   });
  // };

  // start();

  // render() {

  // let duration = require('dayjs/plugin/duration')
  // dayjs.extend(duration)
  // let relativeTime = require('dayjs/plugin/relativeTime')
  // dayjs.extend(relativeTime)

  //         dayjs(date).to(dayjs(date).add(currentEstimate.estimate_validation_date, 'd'), true)

  useEffect(() => {
    start();
  }, []);

  return (
    <div
      className={"stopwatch"}
      {...rest}
      // style={{
      //   background: "rgb(255, 86, 31)",
      //   background:
      //     "linear-gradient(90deg, rgba(255,86,31,1) 0%, rgba(245,98,3,1) 19%, rgba(255,103,30,1) 100%)",
      // }}
    >
      {/* <div>{(dayjs().to(dayjs(date)), true)}</div> */}
      {/* {dayjs().diff(dayjs(date), "month", true).humanize()} */}
      {/* {dayjs.duration(1, "minutes").humanize()}
      {dayjs(date).to(
        dayjs(date).add(
          dayjs().diff(dayjs(date), "days", true),
          "d"
        ),
        true
      )} */}
      <StopwatchDisplay values={{ ...globalState }} formatTime={formatTime} />
    </div>
  );
};

export default Stopwatch;
