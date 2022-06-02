import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Blog from './Blog'
import userEvent from '@testing-library/user-event'
import BlogForm from './BlogForm'




test('renders title and author but not url and likes', () => {

  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'Puppe Bubbe',
    url: 'https://Masa.com',
    likes: 10
  }

  const { container } = render(<Blog blog={blog} />)

  const titleNauthor = container.querySelector('.blog')
  const urlNlikes = container.querySelector('.urlNlikes')

  expect(container).toHaveTextContent(blog.title)
  expect(titleNauthor).toBeVisible()
  expect(urlNlikes).toBe(null)
})

test('when clicked shows likes and url', async () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'Puppe Bubbe',
    url: 'https://Masa.com',
    likes: 10
  }
  const { container } = render(<Blog blog={blog} />)

  const user = userEvent.setup()
  const button = screen.getByText('View')
  await user.click(button)
  expect(container).toHaveTextContent(blog.url)
})

test('clicking the button calls event handler once', async () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'Puppe Bubbe',
    url: 'https://Masa.com',
    likes: 10
  }
  const mockHandler2 = jest.fn()
  const { container } = render(<Blog blog={blog} addLike={mockHandler2}/>)
  const user = userEvent.setup()
  const button1 = screen.getByText('View')
  await user.click(button1)
  expect(container).toHaveTextContent(blog.likes)
  const button2 = screen.getByText('Like')
  await user.click(button2)
  await user.click(button2)
  expect(mockHandler2.mock.calls).toHaveLength(2)
})


test('<BlogForm /> updates parent state and calls onSubmit', async () => {
  const user = userEvent.setup()
  const createBlog = jest.fn()

  render(<BlogForm sendBlog={createBlog} />)

  const input1 = screen.getByPlaceholderText('title here')
  const input2 = screen.getByPlaceholderText('author here')
  const input3 = screen.getByPlaceholderText('url here')
  const sendButton = screen.getByText('create')

  await user.type(input1, 'testing a form...')
  await user.type(input2, 'Yeet')
  await user.type(input3, 'https://me.com')
  await user.click(sendButton)

  expect(createBlog.mock.calls).toHaveLength(1)
  console.log(createBlog.mock.calls[0][0].title)
  expect(createBlog.mock.calls[0][0].title).toBe('testing a form...')
  expect(createBlog.mock.calls[0][0].author).toBe('Yeet')
  expect(createBlog.mock.calls[0][0].url).toBe('https://me.com')
})