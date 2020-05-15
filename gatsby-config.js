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
          `gatsby-remark-images`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `80`,
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
