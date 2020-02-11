module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    
    {
      resolve:`gatsby-source-firestore`,
      options:{
        credential: require("./firebaseKey.json"),
        appConfig:{
          apiKey: "AIzaSyDPe5tBNouNX9vJK6md6neWPHtmKs0Upps",
          authDomain: "catalogo-b917e.firebaseapp.com",
          databaseURL: "https://catalogo-b917e.firebaseio.com",
          projectId: "catalogo-b917e",
          storageBucket: "catalogo-b917e.appspot.com",
          messagingSenderId: "758974939957",
          appId: "1:758974939957:web:e1b337c770f5b27aeec27c",
          measurementId: "G-MT16JJ6FN4"
        },
        types:[
          {
            type:'productsPreView',
            collection:'productosPreView',
            map: doc => ({
              categories: doc.categories,
              productPreViewImg:doc.productPreViewImg,
              slug:doc.slug
            })
          },
          {
            type:'products',
            collection:'products',
            map: doc => ({
              categories: doc.categories,
              description:doc.description,
              productImgs:doc.productImgs,
              slug:doc.slug,
              model:doc.model,
              previewImg:doc.previewImg,
              category:doc.category
            })
          },
          {
            type:'sillas',
            collection:'sillas',
            map: doc => ({
              categories: doc.categories,
              productPreViewImg: doc.productPreViewImg,
              slug:doc.slug
            })
          },
          {
            type:'breedHelpers',
            collection:'nebulizadores_oximetros',
            map: doc => ({
              model:doc.model,
              description:doc.description,
              productImgs:doc.productImgs,
              slug:doc.slug
            })
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
