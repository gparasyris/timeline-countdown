import styled from '@emotion/styled';
import React from 'react';

const Clock = styled.div`
    width: fit-content;
    margin: auto;
`

class StopwatchDisplay extends React.Component {
  render() {
    return (
      <div className={'stopwatch__display'}>
        <Clock>
          {this.props.formatTime(this.props.currentWeek)} Weeks
          {this.props.formatTime(this.props.currentDay)} Days,
          {this.props.formatTime(this.props.currentHr)} Hours,
          {this.props.formatTime(this.props.currentTimeMin)}:
          {this.props.formatTime(this.props.currentTimeSec)}:
          {this.props.formatTime(this.props.currentTimeMs, 'ms')}
        </Clock>
      </div>
    );
  }
}

export default StopwatchDisplay;
