module.exports = {
  siteMetadata: {
    title: "Eliana Palermiti Portofolio's",
    description: 'Portfolio && CV',
    author: 'elianapalermiti',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'eliana-palermiti-portfolio',
        short_name: 'portfolio',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/images/EP.png', // This path is relative to the root of the site.
        theme_color_in_head: false,
      },
    },
  ],
};
