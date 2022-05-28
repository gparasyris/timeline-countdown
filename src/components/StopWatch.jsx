import React from 'react';
import ReactDOM from 'react-dom';
import StopwatchDisplay from './StopWatchDisplay.jsx';
// import StopwatchHistory from './StopwatchHistory.jsx';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);

    let startTime = new Date('2022-04-15');
    // new Date("2022-04-T00:00:00.000Z")
    let endTime = new Date();
    let timeDiffInMs = Math.floor((endTime - startTime));

    this.state = {
      running: false,
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
      currentHr: 0,
      currentDay: 0,
      currentWeek: 0,
      // ...this.convertTime(timeDiffInMs)
    };
    this.start();
  }

  convertTime = (time) => {
    var ms = parseInt((time % 1000) / 100),
      s = parseInt((time / 1000) % 60),
      m = parseInt((time / (1000 * 60)) % 60),
      h = parseInt((time / (1000 * 60 * 60)) % 24),
      d = parseInt((time / (1000 * 60 * 60 * 24)) % 7),
      w = parseInt((time / (1000 * 60 * 60 * 24 * 7)));
    return {
      currentTimeMs: ms,
      currentTimeSec: s,
      currentTimeMin: m,
      currentHr: h,
      currentDay: d,
      currentWeek: w
    };
  }

  formatTime = (val, ...rest) => {
    let value = val.toString();
    if (value.length < 2) {
      value = '0' + value;
    }
    if (rest[0] === 'ms') {
      if (value.length < 3) {
        value = '0' + value;
      }
      if (value.length > 2) {
        value = value.substring(0, 2)
      }
    }
    return value;
  };

  start = () => {
    if (!this.state.running) {
      this.setState({ running: true });
      this.watch = setInterval(() => this.pace(), 10);
    }
  };

  stop = () => {
    this.setState({ running: false });
    clearInterval(this.watch);
  };

  pace = () => {
    this.setState({ currentTimeMs: this.state.currentTimeMs + 10 });
    if (this.state.currentTimeMs == 1000) {
      this.setState({ currentTimeSec: this.state.currentTimeSec + 1 });
      this.setState({ currentTimeMs: 0 });
    }
    if (this.state.currentTimeSec == 60) {
      this.setState({ currentTimeMin: this.state.currentTimeMin + 1 });
      this.setState({ currentTimeSec: 0 });
    }
    if (this.state.currentTimeMin == 60) {
      this.setState({ currentHr: this.state.currentHr + 1 });
      this.setState({ currentTimeMin: 0 });
    }
    if (this.state.currentHr == 24) {
      this.setState({ currentDay: this.state.currentDay + 1 });
      this.setState({ currentDay: 0 });
    }
  };

  reset = () => {
    this.setState({
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
    });
  };

  // start();

  render() {
    return (
      <div className={'stopwatch'}>
        <h2 ref="header">Stopwatch</h2>
        {/* {this.state.running === false && (
          <button onClick={this.start}>START</button>
        )}
        {this.state.running === true && (
          <button onClick={this.stop}>STOP</button>
        )}
        <button onClick={this.reset}>RESET</button> */}
        <StopwatchDisplay
          ref="display"
          {...this.state}
          formatTime={this.formatTime}
        />
        {/* <StopwatchHistory {...this.state} formatTime={this.formatTime} /> */}
      </div>
    );
  }
}

export default Stopwatch;
