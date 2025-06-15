# Node.js MongoDB Contacts API - (hw6-email-and-images)

This project is the sixth homework assignment for the Node.js course.
It builds upon the previous authenticated contact management API by adding password recovery via email and user avatar image uploading.

The app now supports not only secure user sessions and contact isolation, but also password reset through email and profile personalization with avatars.

## 🔐 About

In this assignment, we extend the secure contacts management app with the ability to recover a forgotten password via email and upload a user avatar.
Users can request a password reset link sent to their email address and securely change their password. Authenticated users can also upload or update their avatar image.

## 🚀 Main Features:

- ✅ User registration (POST /auth/register)
- 🔐 User login with JWT session tokens (POST /auth/login)
- 🔁 Token refresh using refresh token in cookies (POST /auth/refresh)
- 🚪 Logout and session removal (POST /auth/logout)
- 🔁 Password recovery via email link (POST /auth/forgot-password → PATCH /auth/reset-password)
- 🛡️ Middleware to authenticate requests (authenticate)
- 👤 User-specific contacts: each contact is owned by a user
- 🖼️ Avatar support: users can upload avatar images and access them via public URL
- 📄 Contacts CRUD with access limited to the authenticated user's data

## 📦 Technologies Used:

- Node.js - Server-side JavaScript
- Express.js - Web application framework
- MongoDB + Mongoose - NoSQL database and ODM
- bcrypt - Password hashing
- jsonwebtoken - Access/refresh token handling
- cookie-parser - Cookie support
- dotenv - Manage environment variables
- Joi - Schema-based input validation
- pino-http and pino-pretty - HTTP request logger
- Nodemailer - Sending emails (SMTP)
- Multer - Upload and process images
- Nodemon - Auto-restarts server during development

## 🧭 API Routes Overview:

### 🔐 Auth Routes (/auth)

- POST /register - Register a new user
- POST /login - Authenticate user and issue tokens
- POST /refresh - Refresh access token using refresh token from cookies
- POST /logout - End session and clear refresh token
- POST /send-reset-email - Send password reset link to user's email
- POST /reset-pwd - Set a new password using the reset token

All /auth routes are public and don't require authentication.

### 📇 Contacts Routes (/contacts) (protected by authenticate middleware)

- GET / - Get all contacts for the authenticated user
- GET /:contactId - Get a specific contact by ID (owned by user)
- POST / - Create a new contact (supports photo upload)
- PUT /:contactId - Replace contact data completely (upsert)
- PATCH /:contactId - Partially update contact fields
- DELETE /:contactId - Delete a contact

All contact routes are user-specific and require authentication.

### 🖼️ Avatar Access

Uploaded avatars are publicly accessible via URLs like:

- GET /uploads/avatars/ - 'filename' -

Example: https://your-domain.com/uploads/avatars/avatar123.jpg

## 🔒 Security & Access:

- ✔️ Passwords are securely hashed before saving.
- ✔️ Only authenticated users can access or modify their own contacts.
- ✔️ Users can't access or modify others' data.
- ✔️ Access and refresh tokens used for session control
- ✔️ Tokens have proper expiration (5 min / 30 days)
- ✔️ Refresh tokens stored in HTTP-only cookies
- ✔️ Password can be reset via a secure token sent to the user's email
<!-- - ✔️ Image files validated and resized before saving -->

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

📁 Branch: hw6-email-and-images

🔗 [GitHub Repo](https://github.com/Ustym-Bordun/nodejs-hw-mongodb/tree/hw6-email-and-images)

<!-- <div style="display: flex; gap: 6px; padding-bottom: 10px; border-bottom: 1px solid rgb(75, 75, 75);">
    <img
      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
      alt="GitHub"
      width="24"
      height="24"
      style="border-radius: 50%;"
    />
    <a href="https://github.com/Ustym-Bordun/nodejs-hw-mongodb/tree/hw6-email-and-images">
      GitHub Repository
    </a>
</div> -->
