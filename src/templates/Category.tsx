import React from 'react'
import { graphql } from 'gatsby'

import PageContext from '@models/PageContext'
import DataProps from '@models/DataProps'
import Layout from '@layouts/Layout'
import SEO from '@layouts/SEO'

import Posts from '@components/Posts/Posts'

export default ({
  pageContext: { tag },
  data: {
    allStrapiPosts: { nodes, totalCount },
    site: { siteMetadata }
  }
}: {
  pageContext: PageContext
  data: DataProps
}) => {
  const posts = nodes
  const labels = siteMetadata.labels
  const tagHeader = `${totalCount} Post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag.toUpperCase()}"`

  return (
    <Layout>
      <SEO
        title={`Posts about ${tag.charAt(0).toUpperCase() + tag.slice(1)} | AGS1130`}
        keywords={[`web development`, `${tag}`]}
      />
      <div className="container mt-5">
        <i>
          <h2 className="heading">{tagHeader}</h2>
        </i>
      </div>
      <Posts posts={posts} labels={labels} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($tag: String) {
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
    allStrapiPosts(
      limit: 300
      sort: { fields: published_at, order: DESC }
      filter: { tags: { elemMatch: { tag: { in: [$tag] } } } }
    ) {
      totalCount
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
