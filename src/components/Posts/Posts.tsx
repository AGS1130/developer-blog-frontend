import React from 'react'

import LabelProps from '@models/Label'
import PostProps from '@models/Post'

import Post from './Post/Post'

const Posts = ({ posts, labels }: { posts: PostProps[]; labels: LabelProps[] }) => {
  return posts.map((post) => <Post key={post.strapiId} post={post} labels={labels} />)
}

export default Posts
