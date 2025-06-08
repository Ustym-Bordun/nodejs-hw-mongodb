### Node.js MongoDB Contacts API - (hw5-auth)

This project is the fifth homework assignment for the Node.js course.
It extends the previous contact management API by adding user registration, authentication, and authorization.
The app now supports secure access to resources using encrypted passwords, token-based sessions, and access control logic based on the authenticated user.

## 🔐 About

In this assignment, we build a secure contacts management app with full support for user identity and session handling. Users can register, log in, refresh sessions, and log out, while all contacts are isolated per user. Access is granted only to the authenticated owner's data.

## 🚀 Main Features:

- ✅ User registration (POST /auth/register)
- 🔐 User login with token-based session (POST /auth/login)
- 🔁 Token refresh using refresh token in cookies (POST /auth/refresh)
- 🚪 Logout and session removal (POST /auth/logout)
- 🛡️ Middleware to authenticate requests (authenticate)
- 👤 User-specific contacts: each contact is owned by a user
- 👤 User-specific contacts: each contact is owned by a user
- 📄 Contacts CRUD (Create, Read, Update, Delete) with authentication

## 📦 Technologies Used:

- Node.js - Server-side JavaScript
- Express.js - Web application framework
- MongoDB + Mongoose - NoSQL database and ODM
- bcrypt - Password hashing
- jsonwebtoken - JWT token creation and verification
- cookie-parser - Handle cookies
- dotenv - Manage environment variables
- Joi - Schema-based input validation
- morgan - HTTP request logger
- Nodemon - Auto-restarts server during development

## 🛠 API Structure:

- Auth Routes (/auth)
- - POST /register - Register a new user
- - POST /login - Authenticate user and issue tokens
- - POST /refresh - Refresh access token using refresh token in cookies
- - POST /logout - End session and remove token

- Contacts Routes (/contacts)
- - GET /contacts - Get all contacts for the logged-in user
- - POST /contacts - Create a new contact (authenticated)
- - GET /contacts/:id - Get contact by ID (only if owned by user)
- - PATCH /contacts/:id - Update contact (only if owned by user)
- - DELETE /contacts/:id - Delete contact (only if owned by user)
    All contacts are protected by authentication middleware.

## 🔐 Security Highlights:

- Passwords are securely hashed before saving.
- Only authenticated users can access or modify their own contacts.
- Access tokens expire in 15 minutes.
- Refresh tokens expire in 30 days and are stored securely in HTTP-only cookies.
- Users can't access or modify others' data.

## 🌍 Live Demo:

Deployed on Render:
👉 https://your-render-url.com (replace with your real link)

/////

The application is deployed on [Render](https://nodejs-hw-mongodb-contacts-app-gdzi.onrender.com/contacts) using the hw4-validation branch.
