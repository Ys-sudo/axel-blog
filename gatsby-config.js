const config = require("./config");
const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

module.exports = {
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
  },
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    rssMetadata: {
      site_url: config.siteUrl + pathPrefix,
      feed_url: config.siteUrl + pathPrefix + config.siteRss,
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${config.siteUrl + pathPrefix}/icons/icon-512-512.png`,
      author: config.userName,
      copyright: config.copyright,
    },
  },
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
        // this is key:
        // set `allowDangerousHtml` on *both* top level and plugin level
        allowDangerousHtml: true,
        remarkOptions: {
          // this ensures HTML is parsed as raw HTML
          allowDangerousHtml: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-decap-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        // stylesPath: `${__dirname}/src/assets/sass/styles.sass`,
        enableIdentityWidget: true,
        // publicPath: `admin`,
        manualInit: true,
        htmlTitle: `Axel Travel - CMS`,
      },
    },

    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/bulma-style.sass"], // applies purging only on the bulma css file
        printRejected: true,
      },
    }, // must be after other CSS plugins
    // "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
