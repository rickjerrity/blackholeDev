import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from 'components/Layout';

const PostsWithTags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`;

  return (
    <Layout title={tagHeader}>
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields;
          const { title } = node.frontmatter;
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          );
        })}
      </ul>
      <Link to="/tags">All tags</Link>
    </Layout>
  );
};

PostsWithTags.propTypes = {
  pageContext: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(limit: 2000, sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default PostsWithTags;
