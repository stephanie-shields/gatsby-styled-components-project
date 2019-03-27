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
  margin-bottom: ${rem('20px')};
  margin-right: ${rem('10px')};
  margin-left: ${rem('10px')};
  height: ${rem('368px')};
  position: relative;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;

  @media (min-width: ${props => props.theme.gridBreakpoints.xl}) {
   height: ${rem('416px')};
  }

  /*
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: ${props => props.borderBackgroundBefore || 'none'};
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
    background: ${props => props.borderBackgroundAfter || 'none'};
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
  */
`

const StyledProjectMedia = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.background || 'none'};
  // padding: ${props => props.padding || '0'};
  transition: 0.5s;

  ${StyledProject}:hover & {
    opacity: 0.25;
  }
`

const StyledProjectImage = styled.div`
  transition: 0.5s;
  background-repeat: no-repeat;
  background-size: ${props => props.backgroundSize || '100% auto'};
  background-position: ${props => props.backgroundPosition || 'center 0'};
  width: 100%;
  max-width: ${props => props.maxWidth || null};
  height: 100%;
  overflow: hidden;
  background-image: ${props => props.background || 'none'};
  margin: 0 auto;

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
  width: ${props => props.width || '50%'};
  height: 100%;
  transition: 0.5s;
  transform-origin: left;
  transform: perspective(2000px) rotateY(-90deg);
  background: ${props => props.background || 'none'};

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

  &:before {
    content: '0';
  }
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

const StyledProjectActions = styled.div`
  margin-bottom: ${rem('8px')};
`

const StyledBadge = styled.span`
  font-size: 75%;
  white-space: nowrap;
  border-radius: ${rem('4px')};
  padding: ${rem('2px')} ${rem('4px')};
  border: ${rem('1px')} solid #fff;
`

const Project = ({
  projectMediaBackground,
  projectImage,
  projectSummaryBackground,
  projectIndex,
  projectLabel,
  projectTitle,
  projectDescription,
  projectBorderBackgroundBefore,
  projectBorderBackgroundAfter,
  projectHasBadge,
  projectBadgeText,
  projectSummaryWidth,
  projectMediaPadding,
  projectImageBackgroundSize,
  projectImageBackgroundPosition,
  projectImageMaxWidth,
}) => (
  <StyledProject
    borderBackgroundBefore={`${projectBorderBackgroundBefore}`}
    borderBackgroundAfter={`${projectBorderBackgroundAfter}`}
  >
    <StyledProjectMedia
      background={`${projectMediaBackground}`}
      padding={projectMediaPadding ? `${projectMediaPadding}` : null} >
      <StyledProjectImage
        background={`url(${projectImage})`}
        backgroundSize={projectImageBackgroundSize ? `${projectImageBackgroundSize}` : null}
        backgroundPosition={projectImageBackgroundPosition ? `${projectImageBackgroundPosition}` : null}
        maxWidth={projectImageMaxWidth ? `${projectImageMaxWidth}` : null} />
    </StyledProjectMedia>
    <StyledProjectSummary background={`${projectSummaryBackground}`} width={`${projectSummaryWidth}`}>
      <StyledProjectIndex>{projectIndex}</StyledProjectIndex>
      <StyledProjectLabel>
        <small>{projectLabel}</small>
      </StyledProjectLabel>
      <StyledProjectTitle>{projectTitle}</StyledProjectTitle>
      <StyledProjectDescription>
        {projectDescription}
        <StyledProjectActions>
          {projectHasBadge && <StyledBadge>{projectBadgeText}</StyledBadge>}
        </StyledProjectActions>
      </StyledProjectDescription>
    </StyledProjectSummary>
  </StyledProject>
)

Project.propTypes = {
  projectMediaBackground: PropTypes.string,
  projectImage: PropTypes.string,
  projectSummaryBackground: PropTypes.string,
  projectSummaryIndex: PropTypes.string,
  projectSummaryLabel: PropTypes.string,
  projectTitle: PropTypes.string,
  // projectDescription: PropTypes.string,
  projectBorderBackgroundBefore: PropTypes.string,
  projectBorderBackgroundAfter: PropTypes.string,
  projectHasBadge: PropTypes.bool,
  projectBadgeText: PropTypes.string,
  projectSummaryWidth: PropTypes.string,
  projectImageBackgroundSize: PropTypes.string,
  projectMediaPadding: PropTypes.string,
  projectImageBackgroundPosition: PropTypes.string,
  projectImageMaxWidth: PropTypes.string,
}

export default Project
