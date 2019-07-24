import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Link } from 'gatsby';
import Container from '../Grid/Container';
import Row from '../Grid/Row';
import Column from '../Grid/Column';
import Project from '../Project/Project';
import ProjectMediaImage01 from '../../images/project-01.png';
import ProjectMediaImage02 from '../../images/project-02.png';
import ProjectMediaImage03 from '../../images/project-03.png';
import ProjectMediaImage04 from '../../images/project-04.png';
import ProjectMediaImage05 from '../../images/project-05.png';

const StyledSectionWork = styled.section`
  background-color: #161D1E;
  padding-top: ${rem('20px')};
`

const StyledSectionWorkGroup = styled.div`
  position: relative;

  ${Row} {
    width: calc(100% + ${rem('20px')});
    margin-left: ${rem('-10px')};
    margin-right: ${rem('-10px')};
    padding-right: calc(${props => props.theme.gridGutterWidth} / 2);
    padding-left: calc(${props => props.theme.gridGutterWidth} / 2);
  }
`

const StyledLayoutColumn = styled(Column)`
  display: flex;
  flex-direction: column;
`

const StyledFiller = styled.div`
  background-color: ${props => props.backgroundColor || '#2B3132'};
  min-height: ${rem('60px')};
  margin-right: ${rem('10px')};
  margin-left: ${rem('10px')};
  margin-bottom: ${rem('20px')};
  flex-grow: 1;
`

const StyledTextBlock = styled.div`
  margin-right: ${rem('10px')};
  margin-left: ${rem('10px')};
  margin-bottom: ${rem('20px')};
  padding: ${rem('24px')} ${rem('24px')} ${rem('16px')};
  background-color: ${props => props.backgroundColor || '#ffffff'};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const StyledTextBlockSummary = styled.div`
  font-size: ${rem('14px')};
  color: ${props => props.color || null};

  a {
    color: ${props => props.color || null};
    border-bottom: ${rem('1px')} solid rgba(255, 255, 255, 0.4);

    &:hover,
    &:focus {
      color: ${props => props.color || null};
      text-decoration: none;
      border-bottom-color: rgba(255, 255, 255, 1);
    }
  }
`

const StyledTextBlockIcon = styled.div`
  display: inline-block;
  border: ${rem('3px')} solid rgba(255, 255, 255, 0.4);
  width: ${rem('48px')};
  height: ${rem('48px')};
  border-radius: 50%;
  text-align: center;
  margin-bottom: ${rem('8px')};

  svg {
    fill: #fff;
    opacity: 0.8;
    width: ${rem('26px')};
    height: ${rem('26px')};
    margin-top: ${rem('8px')};
  }
`

const StyledLeadText = styled.span`
  font-size: ${rem('18px')};
`

const Work = () => (
  <StyledSectionWork>
    <StyledSectionWorkGroup>
      <Container hasMaxWidth hasGutters={false}>
        <Row hasGutters={false}>
          <StyledLayoutColumn xs={12} xl={4} hasGutters={false}>
            <StyledFiller />
            <StyledTextBlock backgroundColor="#0096D1">
              <StyledTextBlockIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </StyledTextBlockIcon>
              <StyledTextBlockSummary color="#ffffff">
                <p>
                  <StyledLeadText>Fun fact you didn't know.</StyledLeadText>
                  <br />
                  This is where I explain some little tidbit that is eye
                  catching to the user.
                </p>
              </StyledTextBlockSummary>
            </StyledTextBlock>
          </StyledLayoutColumn>
          <StyledLayoutColumn xs={12} xl={8} hasGutters={false}>
            <Project
              projectMediaBackground="linear-gradient(to bottom, #96deda, #50c9c3)"
              projectImage={ProjectMediaImage01}
              projectSummaryBackground="#00bfa5"
              projectIndex={1}
              projectLabel="UX Design - Front-End Dev"
              projectTitle="Recreation.gov"
              projectDescription={
                <p>
                  This sentence gives just enough of a hint that you are willing
                  to click to view more details.
                </p>
              }
              projectBorderBackgroundBefore="#904999"
              projectBorderBackgroundAfter="#96deda"
              projectHasBadge
              projectBadgeText="Case Study Coming Soon"
              projectSummaryWidth={`${rem('320px')}`}
              projectImageBackgroundPosition={`center ${rem('32px')}`}
              projectImageMaxWidth={`${rem('656px')}`}
            />
          </StyledLayoutColumn>
        </Row>
      </Container>
    </StyledSectionWorkGroup>
    <StyledSectionWorkGroup>
      <Container hasMaxWidth hasGutters={false}>
        <Row hasGutters={false}>
          <StyledLayoutColumn xs={12} lg={7} hasGutters={false}>
            <Project
              projectImage={ProjectMediaImage02}
              projectMediaBackground="#EEF9FF"
              projectSummaryBackground="#227FCE"
              projectIndex={2}
              projectLabel="UX Design - Front-End Dev"
              projectTitle="myEverify"
              projectDescription={
                <p>
                  This sentence is additionally intriguing and you can't wait to
                  learn more about the project.
                </p>
              }
              projectBorderBackgroundBefore="#00B2CA"
              projectBorderBackgroundAfter="#EEF9FF"
              projectHasBadge
              projectBadgeText="Case Study Still Coming"
              projectSummaryWidth={`${rem('320px')}`}
              projectImageBackgroundSize="auto 120%"
              projectImageBackgroundPosition={`center`}
            />
          </StyledLayoutColumn>
          <StyledLayoutColumn xs={12} lg={5} hasGutters={false}>
            <Project
              projectImage={ProjectMediaImage03}
              projectMediaBackground="linear-gradient(to bottom, #EA384D, #D31027)"
              projectSummaryBackground="#E0193D"
              projectIndex={3}
              projectLabel="Front-End Dev"
              projectTitle="Booz Allen M&C"
              projectDescription={
                <p>
                  This sentence is additionally intriguing and you can't wait to
                  learn more about the project.
                </p>
              }
              projectBorderBackgroundBefore="#00B2CA"
              projectBorderBackgroundAfter="#EEF9FF"
              projectHasBadge
              projectBadgeText="Case Study Still Coming"
              projectSummaryWidth={`${rem('320px')}`}
              projectImageBackgroundSize="auto 140%"
              projectImageBackgroundPosition={`center`}
            />
          </StyledLayoutColumn>
        </Row>
      </Container>
      <Container hasMaxWidth hasGutters={false}>
        <Row hasGutters={false}>
          <StyledLayoutColumn xs={12} lg={6} xl={4} hasGutters={false}>
            <Project
              projectImage={ProjectMediaImage04}
              projectMediaBackground="linear-gradient(to bottom, #8F94FB, #4E54C8)"
              projectSummaryBackground="#4C52C9"
              projectIndex={4}
              projectLabel="Design Research - UX Design"
              projectTitle="NodeKin"
              projectDescription={
                <p>
                  This sentence is additionally intriguing and you can't wait to
                  learn more about the project.
                </p>
              }
              projectBorderBackgroundBefore="#00B2CA"
              projectBorderBackgroundAfter="#EEF9FF"
              projectHasBadge
              projectBadgeText="Case Study Still Coming"
              projectSummaryWidth={`${rem('320px')}`}
              projectImageBackgroundSize={`${rem('414px')} auto`}
              projectImageBackgroundPosition={`center ${rem('32px')}`}
            />
          </StyledLayoutColumn>
          <StyledLayoutColumn xs={12} lg={6} xl={4} hasGutters={false}>
            <Project
              projectImage={ProjectMediaImage05}
              projectMediaBackground="linear-gradient(to bottom, #F09819, #FF512F)"
              projectSummaryBackground="#ff6d00"
              projectIndex={5}
              projectLabel="UX Design - Front-End Dev"
              projectTitle="Digital Solver Space"
              projectDescription={
                <p>
                  This sentence is additionally intriguing and you can't wait to
                  learn more about the project.
                </p>
              }
              projectBorderBackgroundBefore="#00B2CA"
              projectBorderBackgroundAfter="#EEF9FF"
              projectHasBadge
              projectBadgeText="Case Study Still Coming"
              projectSummaryWidth={`${rem('320px')}`}
              projectImageBackgroundSize="auto 100%"
              projectImageBackgroundPosition={`${rem('48px')} ${rem('48px')}`}
            />
          </StyledLayoutColumn>
          <StyledLayoutColumn xs={12} lg={12} xl={4} hasGutters={false}>
            <StyledFiller />
            <StyledTextBlock backgroundColor="#D62877">
              <StyledTextBlockIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </StyledTextBlockIcon>
              <StyledTextBlockSummary color="#ffffff">
                <p>
                  <StyledLeadText>Looking for more?</StyledLeadText>
                  <br />
                  Some projects have yet to be released.{' '}
                  <Link to="/contact/">Contact me</Link> to get more details.
                </p>
              </StyledTextBlockSummary>
            </StyledTextBlock>
          </StyledLayoutColumn>
        </Row>
      </Container>
    </StyledSectionWorkGroup>
  </StyledSectionWork>
)

export default Work;
