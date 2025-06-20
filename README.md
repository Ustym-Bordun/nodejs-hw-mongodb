# Node.js MongoDB Contacts API - (hw7-swagger)

This project is the seventh homework assignment for the Node.js course.
It builds upon the secure, authenticated contacts API and adds:

- 📘 Interactive Swagger documentation for all routes

- 🔐 Google OAuth2 login support

The app allows full user authentication and contact management, enriched with professional documentation and third-party login.

## 🔐 About

In this assignment, we integrated Swagger UI for auto-generated and testable API docs, and added OAuth login via Google for simplified and secure access.

All previous functionality like email password reset, user sessions, avatars, and contact isolation remain intact.

## 🚀 Main Features:

- ✅ User registration (POST /auth/register)
- 🔐 User login with JWT session tokens (POST /auth/login)
- 🌐 Google OAuth login (GET /auth/get-oauth-url)
- 🔁 Token refresh via cookies (POST /auth/refresh)
- 🚪 Logout and session removal (POST /auth/logout)
- 📧 Password recovery through email (POST /auth/send-reset-email)
- 🔑 Password reset with token (POST /auth/reset-pwd)
- 🛡️ Middleware to authenticate requests (authenticate)
- 👤 User-specific contacts: each contact is owned by a user
- 🖼️ Avatar support: users can upload avatar images and access them via public URL
- 📄 Full CRUD on contacts — scoped to the logged-in user
- 📘 API documentation via Swagger (OpenAPI 3)

## 📦 Technologies Used:

- Node.js — Runtime environment
- Express.js — Web server framework
- MongoDB + Mongoose - NoSQL DB and ODM
- bcrypt - Password hashing
- JWT (jsonwebtoken) - Access & Refresh tokens
- cookie-parser - Secure cookie handling
- dotenv - Environment variable config
- Joi - Schema-based input validation
- pino-http and pino-pretty - HTTP request logger
- Nodemailer - Sending emails (SMTP)
- Multer - Upload and process images
- Nodemon - Auto-restarts server during development
- Google OAuth2 - External auth integration
- Swagger UI (OpenAPI) - Interactive API documentation

## 🧭 API Routes Overview:

### 🔐 Auth Routes (/auth)

- POST /register - Register a new user
- POST /login - Authenticate user and issue tokens
- POST /refresh - Refresh access token using refresh token from cookies
- POST /logout - Log out and clear session
- POST /send-reset-email - Send password reset link to user's email
- POST /reset-pwd - Set new password via reset token
- GET /get-oauth-url - Get Google OAuth url
- POST /confirm-oauth - Confirm OAuth and authenticate user

All /auth routes are public and don't require authentication.

### 📇 Contacts Routes (/contacts) (protected by authenticate middleware)

- GET / - Get all contacts for the authenticated user
- GET /:contactId - Get contact by ID
- POST / - Create a new contact (supports photo upload)
- PUT /:contactId - Replace contact data completely (upsert)
- PATCH /:contactId - Partially update contact fields
- DELETE /:contactId - Remove contact

All contact routes are user-specific and require authentication.

### 🖼️ Avatar Access

Uploaded avatars are publicly accessible via URLs like:

- GET /uploads/avatars/:filename

Example: https://nodejs-hw-mongodb-contacts-app-gdzi.onrender.com/uploads/avatars/avatar.jpg

## 🔒 Security & Access:

- 🔐 Passwords hashed before storing
- 🚧 Only authenticated users can access or modify their own contacts.
- 🧾 Access tokens valid for 5 min
- 🔁 Refresh tokens valid for 30 days in HTTP-only cookies
- 🔑 Password can be reset via a secure token sent to the user's email
- 🌐 OAuth login securely generates session tokens
<!-- - ✔️ Image files validated and resized before saving -->

## 📘 Swagger API Docs

The full API is documented and testable via Swagger UI:

👉 [Swagger Docs](https://nodejs-hw-mongodb-contacts-app-gdzi.onrender.com/api-docs/)

Powered by OpenAPI 3.0 definitions and supports live requests.

## 🌍 Live Demo:

The project is deployed on Render:

👉 [Live API](https://nodejs-hw-mongodb-contacts-app-gdzi.onrender.com)

<h2 style="display: flex; align-items: center; padding-left: 4px;">
    <img
      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
      alt="GitHub"
      width="20"
      height="20"
      style="border-radius: 50%;"
    />
    <p style="padding-left: 8px; margin: 0;">
      GitHub Repository:
    </p>
</h2>

🔗 [GitHub Repo](https://github.com/Ustym-Bordun/nodejs-hw-mongodb/tree/hw7-swagger)

📁 Branch: hw7-swagger
