import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Label from '@models/Label'

const TaggedButton = styled.button`
  border: none;
  font-size: 0.85rem;
  text-align: center;
  text-transform: uppercase;
  overflow: hidden;
  position: relative;
  background-size: 110% auto;
  transform: translate3d(0, 0, 0);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.26);
  transition: box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
    transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:active,
  &:focus,
  &:hover {
    outline: none;
    transform: translate3d(0, -1px, 0);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  }
`

const Tag: React.FC<Label> = ({ tag, tech, name, size, color, gradient }) => {
  const colorNotWhite = color !== '#fff'
  const fillColor = colorNotWhite ? '#fff' : '#000'

  return (
    <div className="d-inline-block pr-2 py-1">
      <Link to={`/tags/${tag}/`}>
        <TaggedButton
          style={{ backgroundColor: color, backgroundImage: gradient }}
          className={`btn tech-tag ${colorNotWhite && `text-white`}`}
        >
          <p className="d-inline">{tech} </p>
          <div className="d-inline" style={{ fontSize: size, color }}>
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width={size}
              height={size + 8}
              style={{ fill: fillColor }}
            >
              <title>{tech}</title>
              <path d={name} />
            </svg>
          </div>
        </TaggedButton>
      </Link>
    </div>
  )
}

export default Tag
