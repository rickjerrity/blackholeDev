module.exports = {
  siteMetadata: {
    title: `Blackhole Dev`,
    description: `supermassive waste of time`,
    author: `@rickjerrity`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blackhole Dev`,
        short_name: `Blackhole Dev`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/messier87.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 500,
              backgroundColor: 'none',
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `80`,
              isIconAfterHeader: true,
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
