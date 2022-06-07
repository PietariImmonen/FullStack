

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