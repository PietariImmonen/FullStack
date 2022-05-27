const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://FullStack:${password}@cluster0.5ooui.mongodb.net/blogApp?retryWrites=true&w=majority`

mongoose.connect(url)

const blogSchema = mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
  })

const Blog = mongoose.model('Blog', blogSchema)

const blog = new Blog({
  title: 'Minä',
  author: 'Jag',
  url: 'https://google.fi',
  likes: 123
})

blog.save().then(result => {
  console.log('blog saved!')
  mongoose.connection.close()
})