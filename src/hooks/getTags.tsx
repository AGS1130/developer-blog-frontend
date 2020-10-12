import React from 'react'

import Label from '@models/Label'
import Tag from '@components/Tags/Tag/Tag'

export const getTags = (tags: string[], labels: Label[]) => {
  const techTags: React.ReactElement[] = []
  tags.forEach((techTag: string, i: number) => {
    labels.forEach((label) => {
      const { tag, tech, name, size, color, gradient } = label
      if (techTag === tag) {
        techTags.push(
          <Tag
            key={i}
            tag={tag}
            tech={tech}
            name={name}
            size={size}
            color={color}
            gradient={gradient}
          />
        )
      }
    })
  })
  return techTags
}
