const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const { nonExistingId } = require('../tests/test_helper')


blogsRouter.get('/', async(request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs)
  })

blogsRouter.post('/', async (request, response, next) => {
  
    const body = request.body
      let like = 0

    if(body.likes) {
      like = body.likes
    }


    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: like
    })
      const savedBlog = await blog.save()
      response.status(201).json(savedBlog)
  })



module.exports = blogsRouter