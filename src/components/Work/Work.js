import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import { Link } from 'gatsby'
import Container from '../Grid/Container'
import Row from '../Grid/Row'
import Column from '../Grid/Column'
import Project from '../Project/Project'
import ProjectMediaImage01 from '../../images/project-01.png'
import ProjectMediaImage02 from '../../images/project-02.png'

const StyledSectionWork = styled.section`
  background-color: #fff;
  padding-top: ${rem('16px')};
`

const StyledSectionWorkGroup = styled.div`
  padding-left: ${rem('80px')};
  position: relative;
  display: flex;
  flex-flow: row wrap;
`

const StyledSectionLabel = styled.div`
  width: ${rem('80px')};
  position: relative;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-top: ${rem('1px')} solid #e6e6e6;

  p {
    display: inline-block;
    transform: rotate(-90deg) translateX(-100%) translateY(-50%);
    transform-origin: 0 0;
    position: absolute;
    left: 50%;
    top: ${rem('32px')};
    white-space: nowrap;
    text-transform: uppercase;
    font-size: ${rem('14px')};
    letter-spacing: ${rem('1px')};
  }
`

const StyledSectionLabelText = styled.span`
  color: #0e89c7;
  margin-left: ${rem('6px')};
  font-weight: 600;
`

const StyledLayoutColumn = styled(Column)`
  display: flex;
  flex-direction: column;
`

const StyledProjectDescription = styled.div`
  font-size: ${rem('14px')};
  color: #fff;

  a {
    color: #fff;
    border-bottom: ${rem('1px')} solid rgba(255, 255, 255, 0.4);

    &:hover,
    &:focus {
      color: #fff;
      text-decoration: none;
      border-bottom-color: rgba(255, 255, 255, 1);
    }
  }
`

const StyledFiller = styled.div`
  background-color: #eee;
  min-height: ${rem('60px')};
  margin-right: ${rem('16px')};
  margin-bottom: ${rem('16px')};
  flex-grow: 1;
`

const StyledProjectComingSoon = styled.div`
  margin-right: ${rem('16px')};
  margin-bottom: ${rem('16px')};
  padding: ${rem('24px')} ${rem('24px')} ${rem('16px')};
  background-color: #ed4234;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const StyledProjectIcon = styled.div`
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
      <StyledSectionLabel>
        <p>
          <StyledSectionLabelText>Featured</StyledSectionLabelText> Work
        </p>
      </StyledSectionLabel>
      <Container hasGutters={false}>
        <Row hasGutters={false}>
          <StyledLayoutColumn md={8} hasGutters={false}>
            <Project
              projectBackground="linear-gradient(to bottom, #96deda, #50c9c3)"
              projectMediaBackground={ProjectMediaImage01}
              projectSummaryBackground="#881249"
              projectIndex="01"
              projectLabel="UX Design - Front-End Dev"
              projectTitle="myEverify"
              projectDescription={(
                <p>
                  myE-Verify is a free web-based servive that offers value to anyone who
                  works or is looking for a job in the United Sates. Take a look at the
                  work I did for the responsive redesign for Release 7.0.
                </p>
              )}
              projectBorderBackgroundBefore="#881249"
              projectBorderBackgroundAfter="#96deda" />
          </StyledLayoutColumn>
          <StyledLayoutColumn md={4} hasGutters={false}>
            <StyledFiller />
            <StyledProjectComingSoon>
              <StyledProjectIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </StyledProjectIcon>
              <StyledProjectDescription>
                <p>
                  <StyledLeadText>
                    Looking for more of my latest work?
                  </StyledLeadText>{' '}
                  Some projects have yet to be released.{' '}
                  <Link to="/contact/">Contact me</Link> to get more details.
                </p>
              </StyledProjectDescription>
            </StyledProjectComingSoon>
          </StyledLayoutColumn>
        </Row>
      </Container>
    </StyledSectionWorkGroup>
    <StyledSectionWorkGroup>
      <StyledSectionLabel>
        <p>
          <StyledSectionLabelText>All</StyledSectionLabelText> Work
        </p>
      </StyledSectionLabel>
      <Container hasGutters={false}>
        <Row hasGutters={false}>
          <StyledLayoutColumn md={5} hasGutters={false}>
            <StyledFiller />
          </StyledLayoutColumn>
          <StyledLayoutColumn md={7} hasGutters={false}>
            <Project
              projectMediaBackground={ProjectMediaImage02}
              projectBackground="#EEF9FF"
              projectSummaryBackground="#00B2CA"
              projectIndex="02"
              projectLabel="UX Design - Front-End Dev"
              projectTitle="myEverify"
              projectDescription={(
                <p>
                  myE-Verify is a free web-based servive that offers value to anyone who
                  works or is looking for a job in the United Sates. Take a look at the
                  work I did for the responsive redesign for Release 7.0.
                </p>
              )}
              projectBorderBackgroundBefore="#00B2CA"
              projectBorderBackgroundAfter="#96deda" />
          </StyledLayoutColumn>
        </Row>
      </Container>
      <Container hasGutters={false}>
        <Row hasGutters={false}>
          <StyledLayoutColumn md={4} hasGutters={false}>
            <Project />
          </StyledLayoutColumn>
          <StyledLayoutColumn md={4} hasGutters={false}>
            <Project />
          </StyledLayoutColumn>
          <StyledLayoutColumn md={4} hasGutters={false}>
            <Project />
          </StyledLayoutColumn>
        </Row>
      </Container>
    </StyledSectionWorkGroup>
  </StyledSectionWork>
)

export default Work
