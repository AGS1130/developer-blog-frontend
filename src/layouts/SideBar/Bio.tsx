import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Evergreen from '@static/assets/images/Evergreen.svg'

const Bio = styled.div`
  .profile-img {
    outline: none;
  }
`

const ImgWrapper = styled.div`
  width: 160px;
  margin: auto;
  height: 160px;
  border-radius: 50%;
  display: inline-flex;
  background-color: #60b004;
  transform: translate3d(0, 0, 0);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.26);
  background-image: linear-gradient(90deg, #60b004 0%, #335405 100%);
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

interface BioProps {
  author: string
  tagline: string
}

export default ({ author, tagline }: BioProps) => (
  <Bio className="text-center">
    <Link to="/" className="profile-img">
      <ImgWrapper>
        <img src={Evergreen} className="img-fluid m-auto" alt="Evergreen Build" />
      </ImgWrapper>
    </Link>
    <h1 className="my-2">{author}</h1>
    <small className="text-success">{tagline}</small>
  </Bio>
)
