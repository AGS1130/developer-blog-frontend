import React from 'react'
import { Link, graphql } from 'gatsby'

import PageContext from '@models/PageContext'
import DataProps from '@models/DataProps'
import Layout from '@layouts/Layout'
import SEO from '@layouts/SEO'

import Posts from '@components/Posts/Posts'

export default ({
  pageContext: { currentPage, numPages },
  data: {
    allStrapiPosts: { nodes },
    site: { siteMetadata }
  }
}: {
  pageContext: PageContext
  data: DataProps
}) => {
  const posts = nodes
  const { labels } = siteMetadata

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <Layout>
      <SEO
        title="AGS1130"
        keywords={[`gatsby`, `javascript`, `react`, `web development`, `blog`, `graphql`]}
      />
      <Posts posts={posts} labels={labels} />
      {(!isFirst || numPages >= 2 || !isLast) && (
        <div className="text-center mt-4">
          {!isFirst && (
            <Link
              to={`/${prevPage}`}
              className="mx-2"
              rel="prev"
              style={{ textDecoration: `none` }}
            >
              ← Previous Page
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <Link
              className={`mx-2 ${currentPage === i + 1 ? 'page-numbers current' : 'page-numbers'}`}
              activeStyle={{ color: '#72cc96' }}
              key={`pagination-number-${i + 1}`}
              to={`/${i === 0 ? '' : i + 1}`}
            >
              {i + 1}
            </Link>
          ))}
          {!isLast && (
            <Link
              to={`/${nextPage}`}
              className="mx-2"
              rel="next"
              style={{ textDecoration: `none` }}
            >
              Next Page →
            </Link>
          )}
        </div>
      )}
    </Layout>
  )
}

export const listQuery = graphql`
  query paginateQuery($skip: Int!, $limit: Int!) {
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
    allStrapiPosts(skip: $skip, limit: $limit, sort: { fields: published_at, order: DESC }) {
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
