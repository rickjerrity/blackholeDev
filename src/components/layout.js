import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import ThemeContext from '../context/themeContext';
import Header from './header';
import Footer from './footer';
import SEO from './seo';

import './styles/layout.css';

const Layout = ({ children, title }) => {
  const theme = useContext(ThemeContext);

  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <div>
      <SEO title={title} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={`flexContainer${theme.lightMode ? ' lightTheme' : ''}`}>
        <main className="content">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
