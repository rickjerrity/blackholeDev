import React from 'react';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash.kebabcase';
import PropTypes from 'prop-types';

import Layout from '../components/layout';

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout title={title}>
    <h1>Tags</h1>
    <ul>
      {group
        .sort((a, b) => b.totalCount - a.totalCount)
        .map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
    </ul>
  </Layout>
);

TagsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default TagsPage;
