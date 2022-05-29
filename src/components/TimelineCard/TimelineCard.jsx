import styled from "styled-components";
import useVisibility from "../../utils/visibility";
import { ContentBox } from "./ContentBox";
import { InfoBox } from "./InfoBox";
import { TimeBox } from "./TimeBox";

const Container = styled.div`
  transition: all ease-in-out 0.2s;

  @media only screen and (max-width: 600px) {
    height: 84vh;
    overflow-y: auto;
    &.hide {
      opacity: 0.4;
    }
  }
`;

const Time = ({ children, ...rest }) => (
  <TimeBox {...rest}>
    AAAAAAAAAAA
    <TimeBox.Content>{children}</TimeBox.Content>
  </TimeBox>
);

export const TimelineCard = ({ children, idx }) => {
  const [isFirstVisible, firstRef] = useVisibility(50, idx === 0);

  const timebox = children?.find(({ type }) => type === TimeBox);
  const contentbox = children?.find(({ type }) => type === ContentBox);
  const header = contentbox?.props?.children?.find(
    ({ type }) => type === ContentBox.Header
  );
  const subheader = contentbox?.props?.children.find(
    ({ type }) => type === ContentBox.ContentHeader
  );
  const article = contentbox?.props?.children.find(
    ({ type }) => type === ContentBox.Article
  );
  const info = children?.find(({ type }) => type === InfoBox);

  return (
    <Container
      className={`all ${isFirstVisible ? "" : "hide"}`}
      id={`${idx}-test`}
    >
      {timebox}
      <ContentBox>
        {header}
        <ContentBox.Content>
          {subheader}
          {article}
          <ContentBox.Anchor ref={firstRef} />
        </ContentBox.Content>
      </ContentBox>
      {info}
    </Container>
  );
};

TimelineCard.Separator = TimeBox;
TimelineCard.Footer = InfoBox;
TimelineCard.Footer.Left = InfoBox.Name;
TimelineCard.Footer.Right = InfoBox.Date;
TimelineCard.Content = ContentBox;
TimelineCard.Header = ContentBox.Header;
TimelineCard.SubHeader = ContentBox.ContentHeader;
TimelineCard.Article = ContentBox.Article;
