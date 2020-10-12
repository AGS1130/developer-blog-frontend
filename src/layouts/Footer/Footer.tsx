import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import SocialLinks from '@components/SocialLinks'

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 2rem 0;
  span {
    font-size: 0.75rem;
  }
`

interface DataProps {
  site: {
    buildTime: string
    siteMetadata: {
      contacts: {
        github: string
      }
    }
  }
}

const Footer = () => {
  const query = graphql`
    {
      site {
        buildTime(formatString: "MM/DD/YYYY")
        siteMetadata {
          contacts {
            github
            linkedin
          }
        }
      }
    }
  `
  const render = ({
    site: {
      buildTime,
      siteMetadata: { contacts }
    }
  }: DataProps) => (
    <FooterWrapper className="border-top">
      &copy; {buildTime.split('/')[2]} Built by Gregory Salinas.
      <br />
      All rights reserved.
      <br />
      <a href={contacts.github}>GitHub Repository </a>
      <br />
      <span>Last build: {buildTime}</span>
      <SocialLinks contacts={contacts} />
    </FooterWrapper>
  )

  return <StaticQuery query={query} render={render} />
}

export default Footer
