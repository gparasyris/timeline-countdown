import * as React from "react";
import { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box } from "@mui/material";
import Timer from "./Timer";
import Stopwatch from "./StopWatch";
import styled from "styled-components";

// import './timeline-css.scss';
import { data } from "../data";

const Test = styled.div`
  .time {
    font-family: Indy Sans, sans-serif;
    font-size: 17px;
    line-height: 23px;
    font-weight: 700;
    color: #646464;
    display: flex;
    position: relative;
    align-items: center;
    padding: 24px 0 24px 20px;
    &:before {
      content: "";
      width: 16px;
      height: 16px;
      margin-right: 8px;
      border: 2px solid #bdbdbd;
      background: #fff;
      border-radius: 50%;
      z-index: 1;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 2px;
      height: 100%;
      background: #888;
      left: 27px;
      top: 0;
    }
    .time-content {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
    }
  }

  .content {
    padding: 20px;
    position: relative;
    border: 1px solid #888;
    font-weight: 300;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    .header {
      margin: 0 0 10px;
      line-height: 26px;
      font-size: 19px;
      font-weight: 700;
      color: #222;
      // h3
    }

    .main {
      .header {
        line-height: 27px;
        font-size: 1.17em;
        margin: 0.8em 0 16px;
      }
      h3 {
        display: block;
        font-size: 1.17em;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
      }
      p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        //
        font-size: 19px;
        line-height: 1.44em;
      }
    }
  }

  .info {
    display: flex;
    background-color: #fff;
    border: 1px solid #888;
    border-top: 0;
    padding: 20px 20px 19px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;

    .name {
      font-size: 14px;
      font-weight: 700;
      color: #ec1a2e;
      &:after {
        display: inline-block;
        content: "|";
        color: #888;
        margin: 0 5px;
      }
    }
    .date {
      font-size: 14px;
      color: #888;
      font-weight: 400;
    }
  }

  @media only screen and (max-width: 600px) {
    scroll-behavior: smooth;
    * {
      scroll-behavior: smooth;
    }
    .all {
      height: 92vh;
      overflow-y: auto;
    }
    .time {
      height: 10%;
    }
    .content {
      height: 80%;
    }
    .info {
      height: 10%;
    }
  }
`;

const mapper = {
  facebook: <FacebookIcon />,
  mail: <MailOutlineIcon />,
  linkedin: <LinkedInIcon />,
  phone: <PhoneInTalkIcon />,
  plane: <FlightTakeoffIcon />,
  twitter: <TwitterIcon />,
};

const getColour = (req, res) => {
  if (req) return "primary";
  if (res) return "warning";
  return "grey";
};

// const TLContent = styled(TimelineContent)`
// display: flex;
//     justify-content: flex-end;
//     flex-direction: column;
//     margin: 0 0 6px 0;
// `
// const TLOppositeContent = styled(TimelineOppositeContent)`
// display: flex;
//     justify-content: flex-end;
//     flex-direction: column;
//     margin: 0 0 13px 0;
// `

const initialTime = 10000000;

export default function CustomizedTimeline() {
  const [time, setTime] = useState(initialTime);
  const [timer, setTimer] = useState("");

  // const increaseTimeBy = (add) => setTime(time + add);

  // const interval = () => setInterval(function () {
  //   // console.log(time, 100);
  //   // increaseTimeBy(100);
  //   // console.log(time);
  //   setTime(time + 100)
  // }, 100);

  // interval();
  let stoptime = false;
  var hr = 0;
  var min = 0;
  var sec = 0;
  const timerCycle = () => {
    if (stoptime == false) {
      sec = parseInt(sec);
      min = parseInt(min);
      hr = parseInt(hr);

      sec = sec + 1;

      if (sec == 60) {
        min = min + 1;
        sec = 0;
      }
      if (min == 60) {
        hr = hr + 1;
        min = 0;
        sec = 0;
      }

      if (sec < 10 || sec == 0) {
        sec = "0" + sec;
      }
      if (min < 10 || min == 0) {
        min = "0" + min;
      }
      if (hr < 10 || hr == 0) {
        hr = "0" + hr;
      }

      setTimer(hr + ":" + min + ":" + sec);

      // setTimeout(timerCycle(), 1000);
    }
  };

  // timerCycle();

  return (
    <>
      <Box>
        <Test>
          {data &&
            data.map((event, idx) => (
              <div className="all" id={`${idx}-test`}>
                <div className="time">
                  <div className="time-content">
                    <a href={`#${idx}-test`}>18 hours ago</a>
                    <a />
                    {/* <span>20/09/2022</span> */}
                  </div>
                </div>
                <div className="content">
                  <div className="header">
                    <h3>Here is the title</h3>
                  </div>
                  <div className="main">
                    <h3 className="header">subheadng</h3>
                    <p>article content</p>
                  </div>
                </div>
                <div className="info">
                  <div className="name">Alan Shore</div>
                  <div className="date">20th of June, 20221</div>
                </div>
              </div>
            ))}
        </Test>
      </Box>
      <Box>
        {/* <div>{timer}</div>

      <Timer tt={time} /> */}
        {/* <Stopwatch /> */}
        <Timeline>
          {data &&
            data.map((event, idx) => (
              <TimelineItem key={idx}>
                <TimelineOppositeContent
                  sx={{
                    py: "12px",
                    px: 2,
                    display: "flex",
                    justifyContent: "flex-end",
                    flexDirection: "column",
                    margin: "0 0 6px 0",
                  }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  {event.date}
                </TimelineOppositeContent>
                <TimelineSeparator style={{ zIndex: 2 }}>
                  <TimelineConnector />
                  {/* <TimelineConnector sx={{ bgcolor: 'secondary.main', height: `${(event.next?.days || 1)*2}rem` }} /> */}
                  {/* <TimelineConnector sx={{ bgcolor: 'secondary.main', height: `${(event.next?.days || 1)*2}rem` }} >
                <TimelineContent sx={{ py: '12px', px: 2, display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '100%', width: '200px' }}>
                <Typography>
                 {
                 event.next?.days ? `${event.next?.days} days later` 
                                  : (event.next?.hours ? `${event.next?.hours} hours later` 
                                                       : ( event.next?.minutes ? `${event.next?.minutes} minutes later`
                                                                               : ''
                                                          )
                                     )
                }
                </Typography>
              </TimelineContent>
                </TimelineConnector> */}
                  <TimelineDot
                    color={getColour(event?.isRequest, event?.isResponse)}
                  >
                    {mapper[event.type]}
                  </TimelineDot>
                </TimelineSeparator>
                {/* <TimelineContent sx={{ py: '12px', px: 2, display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', margin:'0 0 6px 0' }}> */}
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  {/* <Typography component="span">
                  {event.title}
                </Typography> */}
                  <Typography>{event.content}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
        </Timeline>
      </Box>
    </>
  );
}

// display: flex;
//     justify-content: flex-end;
//     flex-direction: column;
//     margin: 0 0 13px 0;

/*


date
    display: block;
    height: 100%;
    margin: 0;
    align-self: flex-end;
    margin-bottom: 12px;
}



*/
