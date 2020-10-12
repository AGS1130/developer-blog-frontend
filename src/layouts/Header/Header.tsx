import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import MobileToggle from './MobileToggle'

const Header = styled.header`
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  background: #000;
  flex-direction: column;

  > div {
    margin: 0;
    padding: 0.75rem;
    text-align: center;
  }

  @media (min-width: 851px) {
    display: none;
  }
`

interface HeaderProps {
  siteTitle: string
  open: boolean
  setOpen: (param: boolean) => void
}

export default ({ siteTitle, open, setOpen }: HeaderProps) => (
  <Header>
    <div>
      <MobileToggle open={open} setOpen={setOpen} />
      <h1 className="m-0">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </Header>
)
