import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@layouts/Layout'
import SEO from '@layouts/SEO'
// import DayAndNite from '@components/DayAndNite'

import DataProps from '@models/DataProps'

import { getTags } from '@hooks/getTags'
// import { useDarkMode } from '@hooks/useDarkMode'

export default ({ data }: DataProps) => {
  // const [theme, themeToggler] = useDarkMode()

  const labels = data.site.siteMetadata.labels
  const tags = ['react', 'nodejs', 'html', 'css']

  return (
    <Layout>
      <SEO title="About | AGS1130" />
      <div className="container mt-5">
        <h2 className="heading">About</h2>
        <p>
          <i>What can I say, I'm a developer that works day and nite</i>
          {/* <DayAndNite theme={theme} toggleTheme={themeToggler} /> */}
        </p>
        <br />
        <h3>Current Tech Stack</h3>
        <div className="d-block">{getTags(tags, labels)}</div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query aboutQuery {
    site {
      siteMetadata {
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
  }
`
