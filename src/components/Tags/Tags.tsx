import React from 'react'

import { getTags } from '@hooks/getTags'

import Label from '@models/Label'
import Post from '@models/Post'

interface TagsProps {
  labels: Label[]
  posts: Post[]
}

const Tags: React.FC<TagsProps> = ({ labels, posts }) => {
  const labelCount = labels.map((label) => {
    let count = 0
    posts.forEach((post) => {
      post.tags.forEach(({ tag }: { tag: string }) => {
        if (tag === label.tag) {
          count = count + 1
        }
      })
    })
    return [label.tag, count]
  })

  const categories = labelCount.filter((label) => label[1] > 0)
  const tags = categories.map((category) => category[0])

  return (
    <>
      <h4>Popular Tags</h4>
      <div className="d-block">{getTags(tags, labels)}</div>
    </>
  )
}

export default Tags
