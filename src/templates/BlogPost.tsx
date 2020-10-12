import React from 'react'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'

import DataProps from '@models/DataProps'
import Layout from '@layouts/Layout'
import SEO from '@layouts/SEO'

import { getTags } from '@hooks/getTags'

export default ({
  data: {
    allStrapiPosts: { nodes },
    site: { siteMetadata }
  }
}: DataProps) => {
  const { title, description, post, published_at, tags } = nodes[0]
  const keywords = tags.map(({ tag }: { tag: string }) => tag)
  const { labels } = siteMetadata

  return (
    <Layout>
      <SEO title={`${title} | ${description}`} keywords={keywords} />
      <div className="container mt-5">
        <h2 className="heading">{title}</h2>
        <small className="d-block text-success">
          <i>Posted on {published_at}</i>
        </small>
        <p className="mt-3 d-inline">{description}</p>
        <div className="d-block">{getTags(keywords, labels)}</div>
        <br />
        <ReactMarkdown source={post} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        title
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
    allStrapiPosts(filter: { slug: { eq: $slug } }) {
      nodes {
        published_at(formatString: "MMMM DD, YYYY")
        description
        title
        post
        tags {
          tag
        }
      }
    }
  }
`
