const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
    {
        title: "Moikka",
        author: "Hän",
        url: "Jou",
        likes: 123
    },
    {
        title: "Moikka123",
        author: "Hän123",
        url: "Jou123",
        likes: 123123
    },
  ]

const nonExistingId = async () => {
  const blog = new Blog({ title: 'willremovethissoon', date: new Date() })
  await blog.save()
  await blog.remove()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}
const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
}


module.exports = {
  initialBlogs, nonExistingId, blogsInDb, usersInDb
}