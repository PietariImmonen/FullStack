import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notifications from './components/Notifications'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    blogService
    .getAll()
    .then(blogs1 =>
      setBlogs( blogs1.data )
    ) 
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    
    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      ) 
      setUser(user)
      blogService.setToken(user.token)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 2000)
    }
  }

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <h3>Login</h3>
      <div>
          username
          <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
      </div>
      <div>
          password
          <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
      </div>
      <button type="submit">login</button>
    </form>      
  )

  const logOut = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    setUser(null)
  }

  const addBlog = (event) => {
    event.preventDefault()
    const blogObject = {
      title: title,
      author: author,
      url: url,
    }

    blogService
      .create(blogObject)
      .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
        setErrorMessage(`Created blog author: ${author} and title ${title}`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 3000)
        setTitle('')
        setAuthor('')
        setUrl('')
      })
  }

  const createForm = () => (
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
  

  return (
    <div>
      {errorMessage !== null && <Notifications msg = {errorMessage}/>}
      <div>
        {user === null 
        ? loginForm() 
        : <div>
          <h3>{user.name}</h3>
          {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
          )}
          {createForm()}
          <button onClick={logOut}>Log out</button>
          </div>
        }
      </div>
    </div>
  )
}

export default App
