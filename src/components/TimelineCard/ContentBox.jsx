import { useState } from "react";
import styled from "styled-components";
// import { data } from "../data";
// import useVisibility from "../utils/visibility";

const Container = styled.div`
  position: relative;
  padding: 20px;
  position: relative;
  // border: 1px solid #000;
  border: 1px solid #F7F8F9;
  font-weight: 300;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background: #fff;

  @media only screen and (max-width: 600px) {
    height: 90%;
  }
`;

const Header = styled.h3`
  margin: 0 0 10px;
  line-height: 26px;
  font-size: 19px;
  font-weight: 700;
  color: #222;
`;

const ContentHeader = styled.h3`
  line-height: 27px;
  font-size: 1.17em;
  margin: 0.8em 0 16px;
`;

const Anchor = styled.div`
  position: absolute;
  bottom: 30%;
  z-index: -1;
  pointer-events: none;
  opacity: 0;
`;

const Article = styled.div`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-size: 19px;
  line-height: 1.44em;
`;

const Content = styled.div``;

// <ReactMarkdown linkTarget="_blank" children={...} />

export const ContentBox = ({ children, onClick }) => {
  return (
    <Container>
      {children}
      {/* <div className="header">
        <h3>Here is the title</h3>
      </div> */}
      {/* <div className="main"> */}
      {/* <h3 className="header">subheadng</h3> */}
      {/* <p>article content</p> */}
      {/* </div> */}
      {/* <div className="hidden-bar" ref={firstRef}>
        hidden
      </div> */}
    </Container>
  );
};

ContentBox.Article = Article;
ContentBox.Anchor = Anchor;
ContentBox.ContentHeader = ContentHeader;
ContentBox.Content = Content;
ContentBox.Header = Header;
