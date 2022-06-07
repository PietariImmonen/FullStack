import { useState } from 'react'
import './blog.css'

const Blog = ({ blog, addLike, deleteBlog }) => {

  const [isShow, setIsShow] = useState(false)
  console.log(isShow)

  const toggle = () => {
    setIsShow(!isShow)
  }

  const like = () => {
    addLike(blog.id)
  }

  const del = () => {
    deleteBlog(blog.id)
  }


  return(
    <div className="blog">
      <div>
        <p className='title'>Title: {blog.title} Author: {blog.author}</p>
        <button onClick={toggle} id='blogView'>View</button>
        {isShow &&
        <div className='urlNlikes'>
          <p>{blog.url}</p>
          <p>likes: {blog.likes} <button onClick={like} id='like'>Like</button></p>
          <p>Delete: <button onClick={del} id='del'>Delete</button></p>
        </div>
        }
      </div>
    </div>
  )
}

export default Blog