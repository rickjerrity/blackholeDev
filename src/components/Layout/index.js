import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import ThemeContext from 'context/themeContext';
import Header from 'components/Header';
import Footer from 'components/Footer';
import SEO from 'components/SEO';

import './style.css';

function Layout({ children, title, contentClass = '' }) {
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
        <main className={`content ${contentClass}`}>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  contentClass: PropTypes.string,
};

export default Layout;
