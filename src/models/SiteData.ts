import AllMarkDownRemark from './AllMarkDownRemark'
import SiteMetaData from './SiteMetaData'

interface SiteData {
  site: {
    siteMetadata: SiteMetaData
  }
  allMarkdownRemark: AllMarkDownRemark
}

export default SiteData
