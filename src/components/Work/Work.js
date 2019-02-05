import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import { Link } from 'gatsby'
import Container from '../Grid/Container'
import Row from '../Grid/Row'
import Column from '../Grid/Column'
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

const StyledProject = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border: 0;
  margin: 0;
  margin-bottom: ${rem('16px')};
  margin-right: ${rem('16px')};
  height: ${rem('416px')}; // 448
  background: #eee;
  position: relative;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
  background: linear-gradient(to bottom, #96deda, #50c9c3);
  padding: ${rem('32px')} ${rem('32px')} 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #50c9c3;
    height: ${rem('4px')};
    z-index: 100;
  }

  &::before {
    width: 0;
    opacity: 0;
    transition: opacity 0 ease, width 0 ease;
    transition-delay: 0.5s;
  }

  &::after {
    width: 100%;
    background: #96deda;
    transition: width 0.5s ease;
  }

  &:hover {
    &::before {
      width: 100%;
      opacity: 1;
      transition: opacity 0.5s ease, width 0.5s ease;
      transition-delay: 0;
    }

    &::after {
      width: 0;
      opacity: 0;
      transition: width 0 ease;
    }
  }
`

const StyledProjectMedia = styled.div`
  transition: 0.5s;
  background-image: ${props => props.backgroundImage};
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center 0;
  width: 100%;
  max-width: ${rem('720px')};
  height: 100%;
  overflow: hidden;

  img {
    max-width: ${rem('720px')};
    width: 100%;
    height: auto;
  }

  ${StyledProject}:hover & {
    opacity: 0.5;
    transform: translateX(30%);
  }
`

const StyledProjectSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${rem('16px')};
  background: #50c9c3;
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  transition: 0.5s;
  transform-origin: left;
  transform: perspective(2000px) rotateY(-90deg);

  ${StyledProject}:hover & {
    transform: perspective(2000px) rotateY(0deg);
  }
`

const StyledProjectIndex = styled.div`
  margin-top: ${rem('8px')};
  color: #fff;
  font-size: ${rem('40px')};
  opacity: 0.5;
  line-height: 1.2;
  align-self: flex-start;
  flex-grow: 1;
  align-self: flex-end;
`

const StyledProjectLabel = styled.div`
  margin: 0;
  line-height: 1.4;
  opacity: 0.8;
  color: #fff;

  small {
    font-size: 80%;
    line-height: inherit;
  }
`

const StyledProjectTitle = styled.div`
  color: #fff;
  margin: 0;
  font-size: ${rem('28px')};
  line-height: 1.4;
  margin-bottom: ${rem('12px')};
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

const StyledProjectActions = styled.div``

const StyledProjectLink = styled.div`
  margin-bottom: ${rem('8px')};

  svg {
    transform: rotate(-90deg) translateX(2px);
    fill: #fff;
  }
`

const StyledBadge = styled.span`
  margin-left: ${rem('8px')};
  font-size: 75%;
  white-space: nowrap;
  border-radius: ${rem('4px')};
  padding: ${rem('2px')} ${rem('4px')};
  border: ${rem('1px')} solid #fff;
`

const StyledProjectExternalLink = styled.div``

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
            <StyledProject>
              <StyledProjectMedia backgroundImage={ProjectMediaImage01}>
                {/*<img src={ProjectMediaImage01} alt="Featured Project" />*/}
              </StyledProjectMedia>
              <StyledProjectSummary>
                <StyledProjectIndex>01.</StyledProjectIndex>
                <StyledProjectLabel>
                  <small>UX Design - Front-End Dev</small>
                </StyledProjectLabel>
                <StyledProjectTitle>myEverify</StyledProjectTitle>
                <StyledProjectDescription>
                  <p>
                    myE-Verify is a free web-based servive that offers value to
                    anyone who works or is looking for a job in the United Sates.
                    Take a look at the work I did for the responsive redesign for
                    Release 7.0.
                  </p>
                  <StyledProjectActions>
                    <StyledProjectLink>
                      Case Study
                      <StyledBadge>Coming Soon</StyledBadge>
                    </StyledProjectLink>
                    <StyledProjectExternalLink />
                  </StyledProjectActions>
                </StyledProjectDescription>
              </StyledProjectSummary>
            </StyledProject>
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
            <StyledProject>
              <StyledProjectMedia>
                {/*<img src={ProjectMediaImage02} alt="Featured Project" />*/}
              </StyledProjectMedia>
              <StyledProjectSummary>
                <StyledProjectIndex>01.</StyledProjectIndex>
                <StyledProjectLabel>
                  <small>UX Design - Front-End Dev</small>
                </StyledProjectLabel>
                <StyledProjectTitle>myEverify</StyledProjectTitle>
                <StyledProjectDescription>
                  <p>
                    myE-Verify is a free web-based servive that offers value to
                    anyone who works or is looking for a job in the United Sates.
                    Take a look at the work I did for the responsive redesign for
                    Release 7.0.
                  </p>
                  <StyledProjectActions>
                    <StyledProjectLink>
                      Case Study
                      <StyledBadge>Coming Soon</StyledBadge>
                    </StyledProjectLink>
                    <StyledProjectExternalLink />
                  </StyledProjectActions>
                </StyledProjectDescription>
              </StyledProjectSummary>
            </StyledProject>
          </StyledLayoutColumn>
        </Row>
      </Container>
      <Container hasGutters={false}>
        <Row hasGutters={false}>
          <StyledLayoutColumn md={4} hasGutters={false}>
            <StyledProject>
              <StyledProjectMedia>
                {/*<img src={ProjectMediaImage02} alt="Featured Project" />*/}
              </StyledProjectMedia>
              <StyledProjectSummary>
                <StyledProjectIndex>01.</StyledProjectIndex>
                <StyledProjectLabel>
                  <small>UX Design - Front-End Dev</small>
                </StyledProjectLabel>
                <StyledProjectTitle>myEverify</StyledProjectTitle>
                <StyledProjectDescription>
                  <p>
                    myE-Verify is a free web-based servive that offers value to
                    anyone who works or is looking for a job in the United Sates.
                    Take a look at the work I did for the responsive redesign for
                    Release 7.0.
                  </p>
                  <StyledProjectActions>
                    <StyledProjectLink>
                      Case Study
                      <StyledBadge>Coming Soon</StyledBadge>
                    </StyledProjectLink>
                    <StyledProjectExternalLink />
                  </StyledProjectActions>
                </StyledProjectDescription>
              </StyledProjectSummary>
            </StyledProject>
          </StyledLayoutColumn>
          <StyledLayoutColumn md={4} hasGutters={false}>
            <StyledProject>
              <StyledProjectMedia>
                {/*<img src={ProjectMediaImage02} alt="Featured Project" />*/}
              </StyledProjectMedia>
              <StyledProjectSummary>
                <StyledProjectIndex>01.</StyledProjectIndex>
                <StyledProjectLabel>
                  <small>UX Design - Front-End Dev</small>
                </StyledProjectLabel>
                <StyledProjectTitle>myEverify</StyledProjectTitle>
                <StyledProjectDescription>
                  <p>
                    myE-Verify is a free web-based servive that offers value to
                    anyone who works or is looking for a job in the United Sates.
                    Take a look at the work I did for the responsive redesign for
                    Release 7.0.
                  </p>
                  <StyledProjectActions>
                    <StyledProjectLink>
                      Case Study
                      <StyledBadge>Coming Soon</StyledBadge>
                    </StyledProjectLink>
                    <StyledProjectExternalLink />
                  </StyledProjectActions>
                </StyledProjectDescription>
              </StyledProjectSummary>
            </StyledProject>
          </StyledLayoutColumn>
          <StyledLayoutColumn md={4} hasGutters={false}>
            <StyledProject>
              <StyledProjectMedia>
                {/*<img src={ProjectMediaImage02} alt="Featured Project" />*/}
              </StyledProjectMedia>
              <StyledProjectSummary>
                <StyledProjectIndex>01.</StyledProjectIndex>
                <StyledProjectLabel>
                  <small>UX Design - Front-End Dev</small>
                </StyledProjectLabel>
                <StyledProjectTitle>myEverify</StyledProjectTitle>
                <StyledProjectDescription>
                  <p>
                    myE-Verify is a free web-based servive that offers value to
                    anyone who works or is looking for a job in the United Sates.
                    Take a look at the work I did for the responsive redesign for
                    Release 7.0.
                  </p>
                  <StyledProjectActions>
                    <StyledProjectLink>
                      Case Study
                      <StyledBadge>Coming Soon</StyledBadge>
                    </StyledProjectLink>
                    <StyledProjectExternalLink />
                  </StyledProjectActions>
                </StyledProjectDescription>
              </StyledProjectSummary>
            </StyledProject>
          </StyledLayoutColumn>
        </Row>
      </Container>
    </StyledSectionWorkGroup>
  </StyledSectionWork>
)

export default Work
