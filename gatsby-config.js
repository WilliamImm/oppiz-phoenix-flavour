module.exports = {
  siteMetadata: {
    title: `The Phoenix Flavour`,
    description: `A comprehensive, modular game modding guide for Skyrim Special Edition`,
    author: `Shadea`,
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
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
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-images`, `gatsby-remark-copy-linked-files`],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Phoenix Flavour`,
        short_name: `PhoenixFlavour`,
        start_url: `/`,
        background_color: `#dbdbdb`,
        theme_color: `#557287`,
        display: `standalone`,
        icon: `src/images/phoenix-flavour-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
