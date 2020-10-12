import React from 'react'
import styled from 'styled-components'

const ModeButton = styled.button`
  margin: 0.5rem 0;
  background: none;
  z-index: 999;
  padding: 0;
  border: 0;
  right: 0;
  :focus {
    border: 0;
    outline: none;
  }
`

const DayAndNite = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.3s ease-out;
  background-color: #ffd048;
  ::before {
    left: 8px;
    top: -32px;
    content: '';
    padding: 0px 24px;
    border-radius: 50%;
    position: relative;
    background-color: #000;
    transition: 0.3s ease-out;
  }

  ${({ theme }) =>
    theme === 'light' &&
    `
    background-color: #FFF;

    ::before {
      top: -4px;
    }

    @media (max-width: 600px) {
      ::before {
        top: -12px;
      }
    }
  `}
`

export default ({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) => (
  <ModeButton onClick={toggleTheme}>
    <DayAndNite theme={theme} />
  </ModeButton>
)
