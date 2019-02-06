import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rem } from 'polished'

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
  padding: ${rem('32px')} ${rem('32px')} 0;
  background: ${props => props.background || "none"};

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: ${props => props.borderBackgroundBefore || "none"};
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
    background: ${props => props.borderBackgroundAfter || "none"};
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
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center 0;
  width: 100%;
  max-width: ${rem('720px')};
  height: 100%;
  overflow: hidden;
  background-image: ${props => props.background || "none"};

  img {
    max-width: ${rem('720px')};
    width: 100%;
    height: auto;
  }

  ${StyledProject}:hover & {
    // opacity: 0.5;
    transform: translateX(30%);
  }
`

const StyledProjectSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${rem('16px')};
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  transition: 0.5s;
  transform-origin: left;
  transform: perspective(2000px) rotateY(-90deg);
  background: ${props => props.background || "none"};

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

const Project = ({ projectBackground, projectMediaBackground, projectSummaryBackground, projectIndex, projectLabel, projectTitle, projectDescription, projectBorderBackgroundBefore, projectBorderBackgroundAfter }) => (
  <StyledProject background={`${projectBackground}`} borderBackgroundBefore={`${projectBorderBackgroundBefore}`} borderBackgroundAfter={`${projectBorderBackgroundAfter}`}>
    <StyledProjectMedia background={`url(${projectMediaBackground})`} />
    <StyledProjectSummary background={`${projectSummaryBackground}`}>
      <StyledProjectIndex>{projectIndex}</StyledProjectIndex>
      <StyledProjectLabel>
        <small>{projectLabel}</small>
      </StyledProjectLabel>
      <StyledProjectTitle>{projectTitle}</StyledProjectTitle>
      <StyledProjectDescription>
        {projectDescription}
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
)

Project.propTypes = {
  projectBackground: PropTypes.string,
  projectMediaBackground: PropTypes.string,
  projectSummaryBackground: PropTypes.string,
  projectSummaryIndex: PropTypes.string,
  projectSummaryLabel: PropTypes.string,
  projectTitle: PropTypes.string,
  projectDescription: PropTypes.string,
  projectBorderBackgroundBefore: PropTypes.string,
  projectBorderBackgroundAfter: PropTypes.string,
}

export default Project
