interface Post {
  node: {
    frontmatter: {
      title: string
      tags: string[]
    }
  }
}

export default Post
