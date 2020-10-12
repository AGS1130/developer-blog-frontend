import React from 'react'
import styled from 'styled-components'

const Toggle = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0px;
  z-index: 10;

  &:focus {
    outline: none;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? '#effffa' : '#72cc96')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

interface MobileToggleProps {
  open: boolean
  setOpen: (param: boolean) => void
}

const MobileToggle = ({ open, setOpen }: MobileToggleProps) => (
  <Toggle open={open} onClick={() => setOpen(!open)}>
    <span />
    <span />
    <span />
  </Toggle>
)

export default MobileToggle
