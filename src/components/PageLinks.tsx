import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const links = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Archive', url: '/archive' }
]

const PageLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export default () => {
  return (
    <PageLinks>
      {links.map(({ name, url }, index) => (
        <Link to={url} key={index} className="text-success">
          {name}
        </Link>
      ))}
    </PageLinks>
  )
}
