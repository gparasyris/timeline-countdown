import React, { Component } from 'react';

const timer = ({ tt }) => {
  const convertTime = (time) => {
    var ms = parseInt((time % 1000) / 100),
      s = parseInt((time / 1000) % 60),
      m = parseInt((time / (1000 * 60)) % 60),
      h = parseInt((time / (1000 * 60 * 60)) % 24);

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    return { h, m, s, ms };
  }

  const time = convertTime(tt);
  return (
    <div className="timer">
      <span>{time.h}</span>:
      <span>{time.m}</span>:
      <span>{time.s}</span>:
      <span>{time.ms}</span>
    </div>
  );
}

export default timer;
// export default connect(state => ({ time: state }))(timer);