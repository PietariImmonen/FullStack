import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'
import Notifications from './components/Notifications'
import Togglable from './components/Togglable'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

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

  const logOut = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    setUser(null)
  }

  const addBlog = (blogObject) => {

    blogService
      .create(blogObject)
      .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
        setErrorMessage(`Created blog author: ${blogObject.author} and title ${blogObject.title}`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 3000)
      })
  }

  const addLike = async (id) => {
    const blog = blogs.find(i => i.id === id)
    const changedBlog = {...blog, likes: blog.likes + 1}
    try{
    const x = await blogService.update(id, changedBlog)
    setBlogs(blogs.map(blog => blog.id !== id ? blog : x))
    } catch(err) {
      setErrorMessage(err)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setBlogs(blogs.filter(i => i.id !== id))
    }

  }

  const blogsSorted = blogs.sort((a,b) => b.likes-a.likes)
  console.log(blogsSorted)
  

  return (
    <div>
      {errorMessage !== null && <Notifications msg = {errorMessage}/>}
      <div>
        {user === null 
        ? <LoginForm 
            username={username}
            password={password}
            handleLogin={handleLogin}
            setUsername={setUsername}
            setPassword={setPassword}
        />
        : <div>
          <h3>{user.name}</h3>
          {blogsSorted.map(blog =>
          <Blog key={blog.id} blog={blog} addLike={addLike} />
          )}
          <Togglable buttonLabel="Create new blog">
          <BlogForm 
            sendBlog={addBlog}
          />
          </Togglable>
          <button onClick={logOut}>Log out</button>
          </div>
        }
      </div>
    </div>
  )
}

export default App
