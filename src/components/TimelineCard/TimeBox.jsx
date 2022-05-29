import { useState } from "react";
import styled from "styled-components";
// import { data } from "../data";
// import useVisibility from "../utils/visibility";

const Container = styled.div`
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
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  // a {
  //   text-decoration: none;
  //   text-decoration-color: black;
  //   color: black;
  // }
`;

export const TimeBox = ({ children }) => {
  return (
    // <Container onClick={() => handleHiddenScroll(`${idx}-top-hidden-test`)}>
    <Container>
      {/* <div className="time-content">
        <a
          id={`${idx}-top-hidden-test`}
          href=""
          onClick={(e) => smoothScrollTo(e, getHref(idx))}
        >
          18 hours ago
        </a>
      </div> */}
      {children}
    </Container>
  );
};

TimeBox.Content = Content;
