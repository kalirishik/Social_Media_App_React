// import React from 'react'
// import {useParams} from "react-router";
// const Post = () => {
//     const {id}=useParams();
//   return (
//     <main> <br/>Post {id}</main>
//   )
// }

// export default Post

import {Link} from "react-router";
const Post = ({post}) => {
  return (
    <article className="post">
        <Link to={`post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className="postDate">{post.datetime}</p>
        </Link>
        <p className="postBody">{(post.body).length <=25 ? post.body : `${(post.body).slice(0,25)}...`}</p>
    </article>
  )
}

export default Post