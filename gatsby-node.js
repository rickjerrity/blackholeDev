const path = require(`path`);
const kebabCase = require('lodash.kebabcase');
const { createFilePath } = require(`gatsby-source-filesystem`);

module.exports = {
  onCreateWebpackConfig: ({ actions }) => {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          context: path.resolve(__dirname, 'src', 'context'),
          components: path.resolve(__dirname, 'src', 'components'),
          styles: path.resolve(__dirname, 'src', 'styles'),
        },
      },
    });
  },
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
        component: path.resolve(`./src/templates/Post.js`),
        context: {
          slug: node.fields.slug,
        },
      });
    });

    result.data.allMarkdownRemark.group.forEach((tag) => {
      createPage({
        path: `tags/${kebabCase(tag.fieldValue)}`,
        component: path.resolve('src/templates/PostsWithTag.js'),
        context: {
          tag: tag.fieldValue,
        },
      });
    });
  },
};
