import React from 'react'
import styled from 'styled-components'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
`

interface SocialLinksProps {
  contacts: {
    linkedin: string
    github: string
  }
}

export default ({ contacts }: SocialLinksProps) => {
  return (
    <SocialLinks className="float-left my-3">
      <a className="text-secondary p-2" href={contacts.linkedin}>
        <span title="LinkedIn">
          <FaLinkedin size={26} style={{ color: 'secondary' }} />
        </span>
      </a>
      <a className="text-secondary p-2" href={contacts.github}>
        <span title="GitHub">
          <FaGithubSquare size={26} style={{ color: 'secondary' }} />
        </span>
      </a>
    </SocialLinks>
  )
}
