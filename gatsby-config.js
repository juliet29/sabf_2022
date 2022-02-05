module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Stanford Africa Business Conference 2022",
  },
  plugins: [
    "gatsby-plugin-root-import",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `markdown`,
        path: `${__dirname}/markdown`,
      }
    },
    "gatsby-plugin-mdx",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    
  ],
};
