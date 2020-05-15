import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import TagContainer from '../components/tagContainer';

const Post = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout title={post.frontmatter.title}>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <TagContainer tags={post.frontmatter.tags} />
    </Layout>
  );
};
Post.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        date
      }
    }
  }
`;

export default Post;
