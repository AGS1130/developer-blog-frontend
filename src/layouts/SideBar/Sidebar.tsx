import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Bio from './Bio'

const SideBar = styled.aside`
  transition: transform 0.3s ease-in-out;

  > div {
    max-width: 420px;
  }

  @media (max-width: 850px) {
    position: absolute;
    background: #fff;
    width: 100%;
    z-index: 100;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  }
`

import SocialLinks from '@components/SocialLinks'
import PageLinks from '@components/PageLinks'
import Tags from '@components/Tags/Tags'

export default ({ open }: { open: boolean }) => (
  <StaticQuery
    query={graphql`
      query SiteBioQuery {
        site {
          siteMetadata {
            title
            titleAlt
            author
            contacts {
              linkedin
              github
            }
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
        allStrapiPosts(limit: 10, sort: { fields: published_at, order: DESC }) {
          nodes {
            tags {
              tag
            }
          }
        }
      }
    `}
    // tslint:disable-next-line: jsx-no-lambda
    render={({
      allStrapiPosts: { nodes },
      site: {
        siteMetadata: { author, titleAlt, contacts, labels }
      }
    }) => (
      <SideBar open={open} className="py-4 border-right">
        <div className="container">
          <Bio author={author} tagline={titleAlt} />
          <SocialLinks contacts={contacts} />
          <PageLinks />
          <div className="tech-tags mt-4">
            <Tags labels={labels} posts={nodes} />
          </div>
        </div>
      </SideBar>
    )}
  />
)
