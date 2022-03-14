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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-csv`,
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
    {
      resolve: "gatsby-source-airtable",
        options: {
          apiKey: "key7xAWAIFjRclmGx",
          tables: [
            {
              baseId: "appXirPrUc45gFZHW",
              tableName: "Artists",
            },
                  ]
              }
  },
  {
    resolve: "gatsby-plugin-anchor-links",
    options: {
      offset: -100
    }
  }
    
  ],
};
