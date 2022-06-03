import { useEffect, useState } from "react";

export const DisplayCard = ({ id, value, label }) => {
  // const test = () => {
  // let el = document.querySelector("#days");
  // let currentValue = "00";
  const [currentValue, setCurrentValue] = useState(value || "00");

  //   if (el) {
  //     var top = el.querySelector(".card__top"),
  //       bottom = el.querySelector(".card__bottom"),
  //       back = el.querySelector(".card__back"),
  //       backBottom = el.querySelector(".card__back .card__bottom");

  //     const update = (val) => {
  //       // val = ("0" + val).slice(-2);
  //       // if (val !== this.currentValue) {
  //       // if (this.currentValue >= 0) {
  //       back.setAttribute("data-value", currentValue || "00");
  //       bottom.setAttribute("data-value", currentValue || "00");
  //       // }
  //       currentValue = val;
  //       top.innerText = currentValue;
  //       backBottom.setAttribute("data-value", currentValue);

  //       el.classList.remove("flip");
  //       void el.offsetWidth;
  //       el.classList.add("flip");
  //       // }
  //     };
  //     // update(`0${this.counter++}`);
  //   }
  // };
  useEffect(() => {
    const el = document.querySelector(`#${id}`);
    var top = el.querySelector(".card__top"),
      bottom = el.querySelector(".card__bottom"),
      back = el.querySelector(".card__back"),
      backBottom = el.querySelector(".card__back .card__bottom");
    back.setAttribute("data-value", currentValue || "00");
    bottom.setAttribute("data-value", currentValue || "00");
    // }
    setCurrentValue(value);
    top.innerText = currentValue;
    backBottom.setAttribute("data-value", currentValue);

    el.classList.remove("flip");
    void el.offsetWidth;
    el.classList.add("flip");
  }, [value]);

  return (
    <span id={id} className="flip-clock__piece flip">
      <span className="flip-clock__slot">{label}</span>
      <b className="flip-clock__card card">
        <b className="card__top">{currentValue}</b>
        <b className="card__bottom"></b>
        <b className="card__back">
          <b className="card__bottom" data-value={currentValue}></b>
        </b>
      </b>
      {/* <span className="flip-clock__slot">{label}</span> */}
    </span>
  );
};
