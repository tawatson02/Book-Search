# Book Search and Save Application

# Description
The Book Search and Save Application allows users to search for books using the Google Books API and save their favorite books to their personal profile. This application utilizes a MERN stack (MongoDB, Express.js, React, Node.js) with GraphQL for querying and mutations.

# Technologies
Frontend:

React
Bootstrap
Apollo Client
Backend:

Node.js
Express.js
MongoDB
Mongoose
Apollo Server
GraphQL
JSON Web Tokens (JWT) for authentication

 # Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/book-search-save-app.git
cd book-search-save-app
Install dependencies for both client and server:

bash
Copy code
# For the server
cd server
npm install

# For the client
cd ../client
npm install
Set up environment variables:

Create a .env file in the server directory with the following content:

# bash
Copy code
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
JWT_SECRET=yourSecretKey
# Usage
Start the server:

# bash
Copy code
cd server
npm start
Start the client:

# bash
Copy code
cd client
npm start
Open the application in your browser:

http://localhost:3000

# Features
User Authentication:

Users can sign up and log in with JWT-based authentication.
Book Search:

Users can search for books using the Google Books API.
Save Books:

Authenticated users can save their favorite books to their personal profile.
View Saved Books:

Users can view and manage their saved books.
Code Overview
Client
The client is built with React and uses Apollo Client for GraphQL queries and mutations.

App.jsx:

Sets up the Apollo Client and routes.
components:

Contains reusable UI components such as Navbar.
pages:

SearchBooks.jsx for searching books.
SavedBooks.jsx for viewing saved books.
LoginForm.jsx for user login.
SignupForm.jsx for user signup.
Server
The server is built with Node.js, Express.js, and Apollo Server.

models:

Contains Mongoose models for User and Book.
schemas:

typeDefs.js defines the GraphQL schema.
resolvers.js contains the resolver functions for the GraphQL queries and mutations.
utils:

auth.js for JWT-based authentication middleware.

# License
MIT License

Copyright (c) 2024 tawatson02

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
