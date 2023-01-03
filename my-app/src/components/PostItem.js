import React from 'react'

function PostItem(props) {
    const post = props.post
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.name}</p>
            <img src={post.image} alt={post.title} />
        </div>
    )
}

export default PostItem