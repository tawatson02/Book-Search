const { gql } = require('apollo-server-express');

const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
    bookCount: Int
  }
  type Book{
  authors: [String]
  description: String!
  title: String!
  bookId: String!
  image: String
  link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(_id: ID, username: String): User
    me: User
  }
  
  input BookInput {
  authors: [String]
  description: String!
  title: String!
  bookId: String!
  image: String
  link: String
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(username: String, email: String, password: String!): Auth
    saveBook(bookInput: BookInput!): User
    deleteBook(bookId: String!): User
  }
`;

module.exports = typeDefs;

