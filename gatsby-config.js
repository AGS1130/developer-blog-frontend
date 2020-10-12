const path = require('path')
require('source-map-support').install()
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017'
  }
})

const siteConfig = require('./config/SiteConfig').default
const pathPrefix = siteConfig.pathPrefix === '/' ? '' : siteConfig.pathPrefix

module.exports = {
  pathPrefix: siteConfig.pathPrefix,
  siteMetadata: {
    siteUrl: siteConfig.siteUrl + pathPrefix,
    title: siteConfig.siteTitle,
    titleAlt: siteConfig.siteTitleAlt,
    description: siteConfig.siteDescription,
    author: siteConfig.author.name,
    contacts: {
      linkedin: siteConfig.author.contacts.linkedin,
      github: siteConfig.author.contacts.github
    },
    labels: siteConfig.labels
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-lodash`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        '@components': path.join(__dirname, 'src/components'),
        '@layouts': path.join(__dirname, 'src/layouts'),
        '@models': path.join(__dirname, 'src/models'),
        '@hooks': path.join(__dirname, 'src/hooks'),
        '@theme': path.join(__dirname, 'src/theme'),
        '@config': path.join(__dirname, 'config'),
        '@static': path.join(__dirname, 'static')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `config`,
        path: `${__dirname}/config`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets/images`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`,
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false
            }
          },
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 200
            }
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `nofollow noopener noreferrer`
            }
          },
          `gatsby-remark-autolink-headers`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Asap`
          },
          {
            family: `Poppins`
          }
        ],
        display: `swap`
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.ts'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.siteTitle,
        short_name: siteConfig.siteTitleAlt,
        description: siteConfig.siteDescription,
        start_url: siteConfig.pathPrefix,
        background_color: siteConfig.backgroundColor,
        theme_color: siteConfig.themeColor,
        display: `standalone`,
        icon: siteConfig.siteLogo
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: true,
        purgeOnly: [`styles.scss`]
      }
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 100,
        contentTypes: [`posts`]
      }
    }
  ]
}
