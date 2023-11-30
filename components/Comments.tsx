'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

/* The code is defining a React functional component called "Comments" that takes a single prop called
"slug" of type string. */
export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(false)
  return (
    <>
      {!loadComments && <button onClick={() => setLoadComments(true)}>Load Comments</button>}
      {siteMetadata.comments && loadComments && (
        <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
      )}
    </>
  )
}
