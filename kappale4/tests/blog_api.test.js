const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const helper = require('./test_helper')

  
  beforeEach(async () => {
    await Blog.deleteMany({})
    let blogObject = new Blog(helper.initialBlogs[0])
    await blogObject.save()
    blogObject = new Blog(helper.initialBlogs[1])
    await blogObject.save()
  })

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})



test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')
  
    expect(response.body).toHaveLength(helper.initialBlogs.length)
  })
  
  test('a specific blog is within the returned blogs', async () => {
    const response = await api.get('/api/blogs')
  
    const titles = response.body.map(r => r.title)
  
    expect(titles).toContain(
      'Moikka123'
    )
})

test('a valid blog can be added ', async () => {
  const newBlog = {
    title: "newBlog",
    author: "Mä",
    url: "Jou123333",
    likes: 12312322
}

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
  
    const titles = blogsAtEnd.map(n => n.title)
    expect(titles).toContain(
    'newBlog'
  )
})

test('id is the identifier', async () => {
  const blogsAtStart = await helper.blogsInDb()

  const blogToView = blogsAtStart[0]

  expect(blogToView.id).toBeDefined
})

test('blog without likes is added', async () => {
  const newBlog = {
    title: "newBlog",
    author: "Mä",
    url: "Jou123333",
}

await api
.post('/api/blogs')
.send(newBlog)
.expect(201)
.expect('Content-Type', /application\/json/)

const blogsAtEnd = await helper.blogsInDb()
expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)

const likes = blogsAtEnd.map(n => n.likes)
expect(likes).toContain(
0
)
})

afterAll(() => {
  mongoose.connection.close()
})