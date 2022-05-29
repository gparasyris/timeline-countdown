import { useState } from "react";
import styled from "styled-components";

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

  @media only screen and (max-width: 600px) {
    height: 10%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const TimeBox = ({ children, onClick }) => {
  return <Container onClick={onClick}>{children}</Container>;
};

TimeBox.Content = Content;
