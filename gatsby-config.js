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
        
      }, 
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        codegen: `true`,
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#00A0EA`,
        showSpinner: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/sabfLogo.png',
      },
    },
    
  ],
};
