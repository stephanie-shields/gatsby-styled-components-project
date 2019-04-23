import React from 'react'
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { T105, T110, T120, T130, T140, T150, T160, T170, T180, T190, T200, T300, T400, T500, T600, T700, T800 } from '../utilities/Theme'
import SEO from '../components/SEO/SEO'
import Announcement from '../components/Announcement/Announcement'
import Hero from '../components/Hero/Hero'
// import HeroAlternate from '../components/Hero/HeroAlternate'
import Work from '../components/Work/Work'
import Footer from '../components/Footer/Footer'
import Reboot from '../utilities/Reboot'
import Layout from '../components/Layout/Layout'
import { rem } from 'polished'

const propTypes = {
  activeIndex: PropTypes.number,
  theme: PropTypes.object
};

const defaultProps = {
  activeIndex: null,
  theme: T190
};

const colors = [
  {id: 0, label: 'Theme 1', theme: 'T105', color: `${T105.primary}`},
  {id: 1, label: 'Theme 1', theme: 'T110', color: `${T110.primary}`},
  {id: 2, label: 'Theme 1', theme: 'T120', color: `${T120.primary}`},
  {id: 3, label: 'Theme 1', theme: 'T130', color: `${T130.primary}`},
  {id: 4, label: 'Theme 1', theme: 'T140', color: `${T140.primary}`},
  {id: 5, label: 'Theme 1', theme: 'T150', color: `${T150.primary}`},
  {id: 6, label: 'Theme 1', theme: 'T160', color: `${T160.primary}`},
  {id: 7, label: 'Theme 1', theme: 'T170', color: `${T170.primary}`},
  {id: 8, label: 'Theme 1', theme: 'T180', color: `${T180.primary}`},
  {id: 9, label: 'Theme 1', theme: 'T190', color: `${T190.primary}`},

  {id: 10, label: 'Theme 2', theme: 'T200', color: `${T200.primary}`},
  {id: 11, label: 'Theme 3', theme: 'T300', color: `${T300.primary}`},
  {id: 12, label: 'Theme 4', theme: 'T400', color: `${T400.primary}`}
];

const gradient = keyframes`
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
`

const StyledContainer = styled.div`
  position: relative;
  background-color: ${props => props.theme.primary};
  // background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
	// background-size: 400% 400%;
	// animation: ${gradient} 15s ease infinite;
  overflow: hidden;
`

const StyledStripes = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  right: 0;
  transform: skewY(-8deg);
  pointer-events: none;
  z-index: 0;
  bottom: 0;
`

const StyledStripe = styled.div`
  position: absolute;
  top: auto;
  left: 0;
  right: 0;
  height: ${rem('204px')};

  ${({ order }) =>
    order === 1
      ? `
      height: 5000px;
      bottom: 203px;
      // background: linear-gradient(90deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.3))
    `
      : null}

  ${({ order }) =>
    order === 2
      ? `
        bottom: 612px;
        right: 30%;
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.1));
      `
      : null}

  ${({ order }) =>
    order === 3
      ? `
        bottom: 408px;
        left: 20%;
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.2));
      `
      : null}

  ${({ order }) =>
    order === 4
      ? `
        bottom: 204px;
        left: 40%;
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.15));
      `
      : null}

  ${({ order }) =>
    order === 5
      ? `
      right: calc(50% - 30px);
      bottom: 0;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.08));
    `
      : null}

  ${({ order }) =>
    order === 6
      ? `
        left: calc(50% + 30px);
        bottom: 0;
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.05));
      `
      : null}
`

export default class IndexPage extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      theme: props.theme,
      activeIndex: props.activeIndex
    };
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.handleActiveIndex = this.handleActiveIndex.bind(this);
  }

  handleThemeChange = e => {
    let theme = e.target.value

    if (theme === 'T105') {
      this.setState({ theme: T105 })
    } else if (theme === 'T110') {
      this.setState({ theme: T110 })
    } else if (theme === 'T120') {
      this.setState({ theme: T120 })
    } else if (theme === 'T130') {
      this.setState({ theme: T130 })
    } else if (theme === 'T140') {
      this.setState({ theme: T140 })
    } else if (theme === 'T150') {
      this.setState({ theme: T150 })
    } else if (theme === 'T160') {
      this.setState({ theme: T160 })
    } else if (theme === 'T170') {
      this.setState({ theme: T170 })
    } else if (theme === 'T180') {
      this.setState({ theme: T180 })
    } else if (theme === 'T190') {
      this.setState({ theme: T190 })
    }
    
    else if (theme === 'T200') {
      this.setState({ theme: T200 })
    } else if (theme === 'T300') {
      this.setState({ theme: T300 })
    } else if (theme === 'T400') {
      this.setState({ theme: T400 })
    }
  }

  handleActiveIndex = index => {
    let activeIndex = index.target.id

    if (activeIndex === '0') {
      this.setState({ activeIndex: 0 })
    } else if (activeIndex === '1') {
      this.setState({ activeIndex: 1 })
    } else if (activeIndex === '2') {
      this.setState({ activeIndex: 2 })
    } else if (activeIndex === '3') {
      this.setState({ activeIndex: 3 })
    } else if (activeIndex === '4') {
      this.setState({ activeIndex: 4 })
    } else if (activeIndex === '5') {
      this.setState({ activeIndex: 5 })
    } else if (activeIndex === '6') {
      this.setState({ activeIndex: 6 })
    } else if (activeIndex === '7') {
      this.setState({ activeIndex: 7 })
    } else if (activeIndex === '8') {
      this.setState({ activeIndex: 8 })
    } else if (activeIndex === '9') {
      this.setState({ activeIndex: 9 })
    } else if (activeIndex === '10') {
      this.setState({ activeIndex: 10 })
    } else if (activeIndex === '11') {
      this.setState({ activeIndex: 11 })
    } else if (activeIndex === '12') {
      this.setState({ activeIndex: 12 })
    }
  }
  
  render() {
    return (
      <Layout>
        <ThemeProvider theme={this.state.theme}>
          <div>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <Announcement />
            <StyledContainer>
              <StyledStripes>
                <StyledStripe order={1} />
                <StyledStripe order={2} />
                <StyledStripe order={3} />
                <StyledStripe order={4} />
                <StyledStripe order={5} />
                <StyledStripe order={6} />
              </StyledStripes>
              <Hero
                handleThemeChange={this.handleThemeChange}
                colors={colors}
                activeIndex={this.state.activeIndex}
                handleThemeChange={this.handleThemeChange}
                handleActiveIndex={this.handleActiveIndex} />
            </StyledContainer>
            <Work />
            <Footer />
          </div>
        </ThemeProvider>
      </Layout>
    )
  }
}

IndexPage.propTypes = propTypes;
IndexPage.defaultProps = defaultProps;