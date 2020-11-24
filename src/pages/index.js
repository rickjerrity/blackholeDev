import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
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
      <div className="centeredContent">
        <Link to="/whoami">
          <h1 className="linkTitle">whoami</h1>
        </Link>
      </div>
      <div id="projectsContainer" className="centeredContent">
        <Link to="/projects">
          <h1 className="linkTitle">Projects</h1>
        </Link>
      </div>
      <div className="centeredContent">
        <h1>Posts</h1>
      </div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} className="post">
          {node.frontmatter.featuredImage && node.frontmatter.featuredImage.publicURL ? (
            <div className="centeredContent">
              <Link className="plainLink" to={node.fields.slug}>
                {node.frontmatter.featuredImage.childImageSharp ? (
                  <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} style={{ width: '500px' }} />
                ) : (
                  <img src={node.frontmatter.featuredImage.publicURL} />
                )}
              </Link>
            </div>
          ) : null}
          <div className="centeredContent">
            <Link to={node.fields.slug}>
              <h2 className="linkTitle">{node.frontmatter.title}</h2>
            </Link>
          </div>
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
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
