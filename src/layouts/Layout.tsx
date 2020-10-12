import React from 'react'
import { StaticQuery, graphql, Node } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@theme/GlobalStyles'
import { darkTheme, lightTheme } from '@theme'

import { useDarkMode } from '@hooks/useDarkMode'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Sidebar from './SideBar/Sidebar'

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`

const Article = styled.article`
  transition: transform 0.3s ease-in-out;

  @media (max-width: 850px) {
    opacity: ${({ open }) => (open ? '0' : '1')};
  }
`

interface LayoutProps {
  children: Node
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [open, setOpen] = React.useState(false)

  const [theme] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              titleAlt
              author
              contacts {
                linkedin
                github
              }
            }
          }
        }
      `}
      // tslint:disable-next-line: jsx-no-lambda
      render={(data) => (
        <ThemeProvider theme={themeMode}>
          <React.Fragment>
            <GlobalStyle />
            <Header siteTitle={data.site.siteMetadata.title} open={open} setOpen={setOpen} />
            <Main>
              <Sidebar open={open} />
              <Article open={open} className="content px-4 pt-2 pb-4">
                {children}
              </Article>
            </Main>
            <Footer />
          </React.Fragment>
        </ThemeProvider>
      )}
    />
  )
}

export default Layout
