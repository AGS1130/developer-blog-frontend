const path = require('path')
require('source-map-support').install()
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017'
  }
})

const siteConfig = require('./config/SiteConfig').default
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allStrapiPosts {
        nodes {
          tags {
            tag
          }
          slug
        }
      }
    }
  `).then(({ data: { allStrapiPosts } }) => {
    const posts = allStrapiPosts.nodes

    posts.forEach(({ slug }) => {
      createPage({
        path: slug,
        component: path.resolve(`./src/templates/BlogPost.tsx`),
        context: { slug }
      })
    })

    // Tag pages:
    let uniqTags = []

    posts.forEach(({ tags }) => {
      tags.forEach(({ tag }) => {
        if (uniqTags.indexOf(tag) === -1) {
          uniqTags.push(tag)
          createPage({
            path: `/tags/${tag}/`,
            component: path.resolve(`src/templates/Category.tsx`),
            context: { tag }
          })
        }
      })
    })

    const { postsPerPage } = siteConfig
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((unusedValue, index) => {
      createPage({
        path: index === 0 ? `/` : `/${index + 1}`,
        component: path.resolve(`./src/templates/PostList.tsx`),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1
        }
      })
    })
  })
}
