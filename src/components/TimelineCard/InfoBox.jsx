import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: #fff;
  background: #e4e4e4;
  // border: 1px solid #000;
  // border: 1px solid #F7F8F9;
  border-top: 0;
  padding: 20px 20px 19px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    height: 10%;
  }
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #ec1a2e;
`;

const DateInfo = styled.div`
  font-size: 14px;
  color: #000;
  font-weight: 400;
`;

export const InfoBox = ({ children, onClick, ...rest }) => {
  // return <Container onClick={onClick}>{children}</Container>;
  const name = children.filter((child) => child.type == Name);
  const date = children.filter((child) => child.type == DateInfo);
  return (
    <Container onClick={onClick} {...rest}>
      {/* <div className="name">Alan Shore</div>
      <div className="date">20th of June, 20221</div> */}
      {name}
      {date}
    </Container>
  );
};

InfoBox.Date = DateInfo;
InfoBox.Name = Name;
