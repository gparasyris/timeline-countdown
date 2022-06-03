import FacebookIcon from "@mui/icons-material/Facebook";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box } from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
// import './timeline-css.scss';
// import { data } from "../data";
import { smoothScrollTo } from "../utils/smooth-scroll";
import Stopwatch from "./StopWatch";
import { TimelineCard } from "./TimelineCard";
import TweetEmbed from "react-tweet-embed";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

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

const initialTime = 10000000;

export default function CustomizedTimeline() {
  const [time, setTime] = useState(initialTime);
  const [timer, setTimer] = useState("");
  const [data, setData] = useState([]);

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

  const getHref = (idx) => (idx === 0 ? `timeline` : `${idx - 1}-info`);

  useEffect(() => {
    // key6teTirIEFrarrQ
    fetch(
      "https://api.airtable.com/v0/appj4h0fv2GLe4Bz6/Communication%20events?api_key=key6teTirIEFrarrQ"
    )
      .then((resp) => resp.json())
      .then((res) => {
        setData(
          res.records
            .sort((a, b) =>
              new Date(a.createdTime) > new Date(b.createdTime) ? 1 : -1
            )
            .map(({ fields }) => fields)
        );
      })
      .catch((err) => {
        // Error :(
      });
  }, []);

  return (
    <>
      <Box id="timeline" style={{ marginTop: "-32px", paddingTop: "32px" }}>
        {/* <TimelineCard>
          <TimelineCard.Separator>20/01/2014</TimelineCard.Separator>
          <TimelineCard.Content>
            <TimelineCard.Header>header</TimelineCard.Header>
            <TimelineCard.SubHeader>subheadng</TimelineCard.SubHeader>
            <TimelineCard.Article>
              <TwitterTweetEmbed tweetId={"933354946111705097"} />
            </TimelineCard.Article>
          </TimelineCard.Content>
          <TimelineCard.Footer>
            <TimelineCard.Footer.Left />
            <TimelineCard.Footer.Right>20/01/2014</TimelineCard.Footer.Right>
          </TimelineCard.Footer>
        </TimelineCard> */}
        {data &&
          data.map((event, idx) => (
            <TimelineCard key={idx} idx={idx}>
              <TimelineCard.Separator
                onClick={(e) => smoothScrollTo(e, getHref(idx))}
              >
                {event.date}
              </TimelineCard.Separator>
              <TimelineCard.Content>
                <TimelineCard.Header>{mapper[event.type]}</TimelineCard.Header>
                <TimelineCard.SubHeader>subheadng</TimelineCard.SubHeader>
                <TimelineCard.Article>{event.content}</TimelineCard.Article>
              </TimelineCard.Content>
              <TimelineCard.Footer
                id={`${idx}-info`}
                onClick={(e) => smoothScrollTo(e, getHref(idx))}
              >
                <TimelineCard.Footer.Left />
                <TimelineCard.Footer.Right>
                  {event.date}
                </TimelineCard.Footer.Right>
              </TimelineCard.Footer>
            </TimelineCard>
          ))}
      </Box>
    </>
  );
}
