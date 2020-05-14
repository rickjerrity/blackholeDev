const path = require(`path`);
const kebabCase = require('lodash.kebabcase');
const { createFilePath } = require(`gatsby-source-filesystem`);

module.exports = {
  onCreateNode: ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({ node, getNode, basePath: `posts` });

      createNodeField({
        node,
        name: 'slug',
        value: slug,
      });
    }
  },
  createPages: async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
              }
            }
          }
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `);

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          slug: node.fields.slug,
        },
      });
    });

    result.data.allMarkdownRemark.group.forEach((tag) => {
      createPage({
        path: `tags/${kebabCase(tag.fieldValue)}`,
        component: path.resolve('src/templates/tags.js'),
        context: {
          tag: tag.fieldValue,
        },
      });
    });
  },
};
