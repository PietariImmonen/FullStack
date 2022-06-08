

/*describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'pt',
      username: 'pt',
      password: '123'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('Login form is shown and can login with right credentials', function() {
    cy.contains('Login')
    cy.contains('login').click()
    cy.get('#username').type('pt')
    cy.get('#password').type('123')
    cy.get('#login').click()
    cy.contains('pt')
    cy.get('#gg').click()
  })
})

describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'pt',
      username: 'pt',
      password: '123'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('Cant login with wrong credentials', function() {
    cy.contains('Login')
    cy.contains('login').click()
    cy.get('#username').type('pt')
    cy.get('#password').type('124')
    cy.get('#login').click()

    cy.contains('pt')
  })
})

describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'pt',
      username: 'pt',
      password: '123'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('Can create a blog', function() {
    cy.contains('login').click()
    cy.get('#username').type('pt')
    cy.get('#password').type('123')
    cy.get('#login').click()
    cy.get('#newBlogButton').click()
    cy.get('#title').type('pt')
    cy.get('#author').type('123')
    cy.get('#url').type('pt')
    cy.get('#submit').click()
    cy.contains('Title: pt')
  })
})

describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'pt',
      username: 'pt',
      password: '123'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('Can like a blog and delete blog', function() {
    cy.contains('login').click()
    cy.get('#username').type('pt')
    cy.get('#password').type('123')
    cy.get('#login').click()
    cy.get('#newBlogButton').click()
    cy.get('#title').type('pt')
    cy.get('#author').type('123')
    cy.get('#url').type('pt')
    cy.get('#submit').click()
    cy.contains('Title: pt')
    cy.get('#blogView').click()
    cy.get('#like').click()
    cy.contains('1')
    cy.get('#del').click()
    cy.get('.blog').should('not.contain', 'title')
  })
})*/

describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'pt',
      username: 'pt',
      password: '123'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    const blog1 = {
      title: 'mostLikes',
      author: 'a',
      url: '123',
      likes: 11
    }
    const blog2 = {
      title: 'second mostLikes',
      author: 'a',
      url: '123',
      likes: 10
    }
    cy.createBlog(blog1)
    cy.createBlog(blog2)
    cy.visit('http://localhost:3000')
  })

  it('Can like a blog and delete blog', function() {
    cy.contains('login').click()
    cy.get('#username').type('pt')
    cy.get('#password').type('123')
    cy.get('#login').click()
    cy.get('.blog').eq(0).should('contain', 'mostLikes')
    cy.get('.blog').eq(1).should('contain', 'second mostLikes')
  })
})