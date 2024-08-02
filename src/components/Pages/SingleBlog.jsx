import React from 'react'
import "./SingleBlog.css"
function SingleBlog() {
    return (
        <div className='SingleBlog  h-screen p-8 mx-12 my-4 rounded-xl'>
            <div>
                <h1>Blog</h1>
            </div>
            <div>
                <div>Author</div>
                <div>Topic</div>
                <div>Description</div>
                <div>Message</div>
            </div>
        </div>
    )
}

export default SingleBlog