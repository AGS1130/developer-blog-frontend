import React from 'react'
import { Link } from 'gatsby'

import { getTags } from '@hooks/getTags'

import LabelProps from '@models/Label'
import PostProps from '@models/Post'

interface DataProps {
  post: PostProps
  labels: LabelProps
}

const Post: React.FC<DataProps> = ({
  post: { strapiId, published_at, description, title, tags, slug },
  labels
}) => (
  <div key={strapiId} className="container mt-5">
    <Link to={`/${slug}`} className="text-dark">
      <h2 className="title">{title}</h2>
    </Link>
    <small className="d-block text-success">
      <i>Posted on {published_at}</i>
    </small>
    <p className="mt-3 d-inline">{description}</p>
    <Link to={`/${slug}`} className="text-success">
      <small className="d-inline-block ml-3"> Read full post →</small>
    </Link>
    <div className="d-block">
      {getTags(
        tags.map(({ tag }: { tag: string }) => tag),
        labels
      )}
    </div>
  </div>
)

export default Post
