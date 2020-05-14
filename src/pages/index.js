import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import TagContainer from '../components/tagContainer';

const styles = {
  postSummary: {
    display: 'inline',
  },
};

const IndexPage = ({ data }) => {
  return (
    <Layout title="Home">
      <div id="title">
        <h1>Supermassive waste of time</h1>
      </div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          {node.frontmatter.featuredImage &&
          node.frontmatter.featuredImage.publicURL ? (
            <div>
              <Link className="plainLink" to={node.fields.slug}>
                <img src={node.frontmatter.featuredImage.publicURL} />
              </Link>
            </div>
          ) : null}
          <Link to={node.fields.slug}>
            <h2 style={styles.postSummary}>{node.frontmatter.title}</h2>
          </Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <TagContainer tags={node.frontmatter.tags} />
        </div>
      ))}
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            tags
            featuredImage {
              publicURL
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
