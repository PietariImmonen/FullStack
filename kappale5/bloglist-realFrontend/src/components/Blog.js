import { useState } from "react"
import "./blog.css"

const Blog = ({blog, addLike, deleteBlog}) => {

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
      {blog.title}
      <button onClick={toggle}>View</button>
      {isShow && 
        <div>
          <p>{blog.author}</p>
          <p>{blog.url}</p>
          <p>likes: {blog.likes} <button onClick={like}>Like</button></p>
          <p>Delete: <button onClick={del}>Delete</button></p>
        </div>
      }
    </div>
  </div>  
  )
}

export default Blog