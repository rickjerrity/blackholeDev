import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from 'components/Layout';
import TagContainer from 'components/TagContainer';

import 'styles/index.css';

function Home({ data }) {
  return (
    <Layout title="Home">
      <div id="title">
        <h1>Supermassive waste of time</h1>
      </div>
      <div id="projectsContainer" className="centeredContent">
        <Link to="/projects">
          <h2 className="linkTitle">Projects</h2>
        </Link>
      </div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} className="post">
          {node.frontmatter.featuredImage || node.frontmatter.featuredImageExternal ? (
            <div>
              <Link className="plainLink" to={node.fields.slug}>
                <img
                  src={node.frontmatter.featuredImageExternal ? node.frontmatter.featuredImageExternal : node.frontmatter.featuredImage.publicURL}
                />
              </Link>
            </div>
          ) : null}
          <Link to={node.fields.slug}>
            <h2 className="linkTitle">{node.frontmatter.title}</h2>
          </Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <TagContainer tags={node.frontmatter.tags} />
        </div>
      ))}
    </Layout>
  );
}

Home.propTypes = {
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
            featuredImageExternal
          }
          fields {
            slug
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;

export default Home;
