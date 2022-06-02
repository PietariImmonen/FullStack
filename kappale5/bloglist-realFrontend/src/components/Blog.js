import { useState } from "react"
import "./blog.css"

const Blog = ({blog}) => {

  const [isShow, setIsShow] = useState(false)
  console.log(isShow)

  const toggle = () => {
    setIsShow(!isShow)
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
          <p>likes: {blog.likes} <button>like</button></p>
        </div>
      }
    </div>
  </div>  
  )
}

export default Blog