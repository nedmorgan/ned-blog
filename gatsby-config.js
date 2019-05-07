module.exports = {
  siteMetadata: {
    title: `Ned's Dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        pure: true,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            variants: [`400`, `700`, `800`],
          },
          {
            family: `Lato`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}
