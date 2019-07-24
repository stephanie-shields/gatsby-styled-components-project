import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Reboot from '../../utilities/Reboot';
import { T100, T200, T300, T400 } from '../../utilities/Theme';
import Announcement from '../../components/Announcement/Announcement';
import Header from '../../components/Header/Header';

const propTypes = {
  activeIndex: PropTypes.number,
  theme: PropTypes.object,
  children: PropTypes.node
};

const defaultProps = {
  activeIndex: null,
  theme: T100
};

const colors = [
  {id: 0, label: 'Theme 1', theme: 'T100', color: `${T100.primary}`},
  {id: 1, label: 'Theme 2', theme: 'T200', color: `${T200.primary}`},
  {id: 2, label: 'Theme 3', theme: 'T300', color: `${T300.primary}`},
  {id: 3, label: 'Theme 4', theme: 'T400', color: `${T400.primary}`}
];

const StyledContainer = styled.div`
  background-color: ${props => props.theme.primary};
  overflow: hidden;
`

class Layout extends React.Component  {
  state = { theme: this.props.theme, activeIndex: this.props.activeIndex };

  handleThemeChange = (theme) => {
    let selectedTheme = theme.target.value

    if (selectedTheme === 'T100') {
      this.setState({ theme: T100 })
    } else if (selectedTheme === 'T200') {
      this.setState({ theme: T200 })
    } else if (selectedTheme === 'T300') {
      this.setState({ theme: T300 })
    } else if (selectedTheme === 'T400') {
      this.setState({ theme: T400 })
    }
  }

  handleActiveIndex = (index) => {
    let activeIndex = index.target.id

    if (activeIndex === '0') {
      this.setState({ activeIndex: 0 })
    } else if (activeIndex === '1') {
      this.setState({ activeIndex: 1 })
    } else if (activeIndex === '2') {
      this.setState({ activeIndex: 2 })
    } else if (activeIndex === '3') {
      this.setState({ activeIndex: 3 })
    }
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <ThemeProvider theme={this.state.theme}>
              <>
                <Reboot />
                <Announcement />
                <StyledContainer>
                  <Header
                    siteTitle={`Stephanie Shields`}
                    siteSubtitle={`[ Designer + Coder ]`}
                    colors={colors}
                    activeIndex={this.state.activeIndex}
                    handleThemeChange={this.handleThemeChange}
                    handleActiveIndex={this.handleActiveIndex} />
                  {this.props.children}
                </StyledContainer>
              </>
            </ThemeProvider>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;
export default Layout;
