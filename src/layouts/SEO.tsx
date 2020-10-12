import React from 'react'
import Helmet from 'react-helmet'
import config from '@config/SiteConfig'

interface SEOProps {
  description: string
  title: string
  lang: string
  keywords: []
}

const SEO: React.FC<SEOProps> = ({ lang, title, description, keywords }) => {
  const { siteTitle, siteDescription, siteBanner, siteUrl, pathPrefix, safariPinnedTab } = config
  const realPrefix = pathPrefix === '/' ? '' : pathPrefix

  const seoTitle = title || siteTitle
  const seoDescription = description || siteDescription
  const seoImage = siteUrl + realPrefix + siteBanner

  const blogURL = siteUrl + pathPrefix
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      '@id': blogURL,
      url: blogURL,
      name: seoTitle,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : ''
    }
  ]

  console.log(keywords)

  return (
    <Helmet>
      <html lang={lang} />
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="image" content={seoImage} />
      {/* Favicon Meta Properties */}
      <link rel="mask-icon" href={safariPinnedTab} color="#60b004" />
      <meta name="msapplication-TileColor" content="#60b004" />
      <meta name="theme-color" content="#ffffff" />
      {/* SEO Meta Properties */}
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      <meta property="og:locale" content={config.ogLanguage} />
      <meta property="og:site_name" content={config.ogSiteName ? config.ogSiteName : ''} />
      <meta property="og:url" content={blogURL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={seoImage} />
      {keywords && <meta property="keywords" content={keywords.join(', ')} />}
    </Helmet>
  )
}

export default SEO
