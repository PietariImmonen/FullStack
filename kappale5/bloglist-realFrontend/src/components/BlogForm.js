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
            placeholder='title here'
            onChange={({ target }) => setTitle(target.value)}
            id='title'
          />
        </div>
        <div>
          author:
          <input
            type="text"
            value={author}
            name="Author"
            placeholder='author here'
            onChange={({ target }) => setAuthor(target.value)}
            id='author'
          />
        </div>
        <div>
          url:
          <input
            type="text"
            value={url}
            name="Url"
            placeholder='url here'
            onChange={({ target }) => setUrl(target.value)}
            id='url'
          />
        </div>
        <button type="submit" id='submit'>create</button>
      </form>
    </div>
  )
}

BlogForm.propTypes = {
  sendBlog: PropTypes.func.isRequired
}

export default BlogForm