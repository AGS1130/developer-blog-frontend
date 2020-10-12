import React from 'react'
import { graphql } from 'gatsby'

import DataProps from '@models/DataProps'
import Layout from '@layouts/Layout'
import SEO from '@layouts/SEO'

import Posts from '@components/Posts/Posts'

export default ({
  data: {
    allStrapiPosts: { nodes },
    site: { siteMetadata }
  }
}: DataProps) => {
  const posts = nodes
  const { labels } = siteMetadata

  return (
    <Layout>
      <SEO
        title="Archive | AGS1130"
        keywords={[`gatsby`, `javascript`, `react`, `web development`, `blog`, `graphql`]}
      />
      <div className="container mt-5">
        <h2 className="heading mt-3">All Posts</h2>
      </div>
      <Posts posts={posts} labels={labels} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ArchiveQuery {
    site {
      siteMetadata {
        title
        author
        labels {
          tag
          tech
          name
          size
          color
          gradient
        }
      }
    }
    allStrapiPosts(limit: 300, sort: { fields: published_at, order: DESC }) {
      nodes {
        strapiId
        published_at(formatString: "MMMM DD, YYYY")
        description
        title
        post
        slug
        tags {
          tag
        }
      }
    }
  }
`
