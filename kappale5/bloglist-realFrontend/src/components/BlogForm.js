import React, { useState } from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({ sendBlog }) => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const addBlog = (event) => {
        event.preventDefault()
        const blogObject = {
            title: title,
            author: author,
            url: url
        }
        sendBlog(blogObject)
        setTitle('')
        setAuthor('')
        setUrl('')
    }

  return (
    <div>
    <form onSubmit={addBlog}>
      <h3>Create blog</h3>
      <div>
          title:
          <input
            type="text"
            value={title}
            name="Title"
            onChange={({ target }) => setTitle(target.value)}
          />
      </div>
      <div>
          author:
          <input
            type="text"
            value={author}
            name="Author"
            onChange={({ target }) => setAuthor(target.value)}
          />
      </div>
      <div>
          url:
          <input
            type="text"
            value={url}
            name="Url"
            onChange={({ target }) => setUrl(target.value)}
          />
      </div>
      <button type="submit">create</button>
    </form> 
    </div>
  )
}

BlogForm.propTypes = {
  sendBlog: PropTypes.func.isRequired
}

export default BlogForm