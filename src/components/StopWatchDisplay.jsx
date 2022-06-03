import styled from "@emotion/styled";
// import style from './all.scss'
import React from "react";
import { DisplayCard } from "./DisplayCard";
import { TimeContainer } from "./TimelineCard/TimeContainer";

const Clock = styled.div`
  width: fit-content;
  margin: auto;
`;

export const StopwatchDisplay = ({ values, formatTime }) => {
  // currentValue = "01";
  // counter = 1;
  // test() {
  //   let el = document.querySelector("#days");

  //   if (el) {
  //     var top = el.querySelector(".card__top"),
  //       bottom = el.querySelector(".card__bottom"),
  //       back = el.querySelector(".card__back"),
  //       backBottom = el.querySelector(".card__back .card__bottom");

  //     const update = (val) => {
  //       val = ("0" + val).slice(-2);
  //       if (val !== this.currentValue) {
  //         if (this.currentValue >= 0) {
  //           back.setAttribute("data-value", this.currentValue);
  //           bottom.setAttribute("data-value", this.currentValue);
  //         }
  //         this.currentValue = val;
  //         top.innerText = this.currentValue;
  //         backBottom.setAttribute("data-value", this.currentValue);

  //         el.classList.remove("flip");
  //         void el.offsetWidth;
  //         el.classList.add("flip");
  //       }
  //     };
  //     update(`0${this.counter++}`);
  //   }
  // }

  // setTimeout(() => test(), 2000);

  // render() {
  return (
    <div className={"stopwatch__display"}>
      <Clock>
        <div className="flip-clock">
          {/* <span className="flip-clock__piece flip">
              <b className="flip-clock__card card">
                <b className="card__top">12</b>
                <b className="card__bottom"></b>
                <b className="card__back">
                  <b className="card__bottom" data-value="12"></b>
                </b>
              </b>
              <span className="flip-clock__slot">Days</span>
            </span>
            <span id="days" className="flip-clock__piece flip">
              <b className="flip-clock__card card">
                <b className="card__top">01</b>
                <b className="card__bottom"></b>
                <b className="card__back">
                  <b className="card__bottom" data-value="01"></b>
                </b>
              </b>
              <span className="flip-clock__slot">Hours</span>
            </span> */}
          {/* <span className="flip-clock__piece flip">
              <b className="flip-clock__card card">
                <b className="card__top">00</b>
                <b className="card__bottom"></b>
                <b className="card__back">
                  <b className="card__bottom" data-value="00"></b>
                </b>
              </b>
              <span className="flip-clock__slot">Minutes</span>
            </span> */}
          {/* <span className="flip-clock__piece flip">
              <b className="flip-clock__card card">
                <b className="card__top">00</b>
                <b className="card__bottom"></b>
                <b className="card__back">
                  <b className="card__bottom" data-value="00"></b>
                </b>
              </b>
              <span className="flip-clock__slot">Seconds</span>
            </span> */}
          <DisplayCard
            id="Weeks"
            value={formatTime(values?.currentWeek)}
            label={"Weeks"}
          />
          <DisplayCard
            id="Days"
            value={formatTime(values?.currentDay)}
            label={"Days"}
          />
          <DisplayCard
            id="Hours"
            value={formatTime(values.currentHr)}
            label={"Hours"}
          />
          <DisplayCard
            id="minutes"
            value={formatTime(values.currentTimeMin)}
            label={"Minutes"}
          />
          <DisplayCard
            id="seconds"
            value={formatTime(values.currentTimeSec)}
            label={"Seconds"}
          />
        </div>
        {/* {formatTime(values.currentWeek)} Weeks
          {formatTime(values.currentDay)} Days,
          {formatTime(values.currentHr)} Hours,
          {formatTime(values.currentTimeMin)}:
          {formatTime(values.currentTimeSec)}:
          {formatTime(values.currentTimeMs, "ms")} */}
      </Clock>
    </div>
  );
  // }
};

export default StopwatchDisplay;
