import React from 'react';
import PropTypes from 'prop-types';
import { T100 } from '../utilities/Theme';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import Hero from '../components/Hero/Hero';
import Work from '../components/Work/Work';
import Footer from '../components/Footer/Footer';

const propTypes = {
  theme: PropTypes.object
};

const defaultProps = {
  theme: T100
};

class IndexPage extends React.Component  {
  state = { theme: this.props.theme };
  
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Hero
          primaryColor={`${this.state.theme.primary}`} />
        <Work />
        <Footer />
      </Layout>
    )
  }
}

IndexPage.propTypes = propTypes;
IndexPage.defaultProps = defaultProps;
export default IndexPage;
