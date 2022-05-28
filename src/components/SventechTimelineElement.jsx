import { useState } from "react";
import styled from "styled-components";
import { data } from "../data";
import useVisibility from "../utils/visibility";

const Test = styled.div`
  .hidden-anchor {
    // opacity: 0;
    // height: 0;
    display: none;
  }
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
    position: relative;
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
  .hidden-bar {
    position: absolute;
    bottom: 30%;
    z-index: -1,
    pointer-events: none,
    opacity: 0
  }

  .all {
    transition: all ease-in-out 0.2s;
  }

  @media only screen and (max-width: 600px) {
    scroll-behavior: smooth;
    * {
      scroll-behavior: smooth;
    }
    .all {
      height: 84vh;
      overflow-y: auto;
      &.hide {
        opacity: 0.2
      }
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

export const SventechTimelineElement = ({ idx }) => {
  const handleHiddenScroll = (id) => {
    document.getElementById(id)?.click();
  };

  const [isFirstVisible, firstRef] = useVisibility(0);

  return (
    <Test>
      <div
        className={`all ${isFirstVisible ? "" : "hide"}`}
        id={`${idx}-test`}
      >
        <div className="time">
          <div className="time-content">
            <a href={`#${idx - 1}-info`}>18 hours ago</a>
            <a />
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
          <div className="hidden-bar" ref={firstRef}>
            hidden
          </div>
        </div>
        <div
          id={`${idx}-info`}
          className="info"
          onClick={() => handleHiddenScroll(`${idx}-hidden-test`)}
        >
          <a
            id={`${idx}-hidden-test`}
            className="hidden-anchor"
            href={`#${idx - 1}-info`}
          />
          <div className="name">Alan Shore</div>
          <div className="date">20th of June, 20221</div>
        </div>
      </div>
    </Test>
  );
};
