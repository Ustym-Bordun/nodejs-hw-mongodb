# Node.js MongoDB CRUD API - (hw4-validation)

This project is the fourth homework assignment for the Node.js course. It extends the previous CRUD API by adding data validation, pagination, sorting, and optional filtering features to efficiently manage the contact collection.

## 🚀 Main Features:

- Data Validation
  - Centralized middleware for validating request bodies using Joi.
  - Schema-level constraints for string fields (min 3, max 20 characters).
  - Middleware to check the validity of MongoDB ObjectIds.
- Pagination
  - Implemented via page and perPage query parameters.
  - Response includes metadata such as total items, pages, and pagination status.
- Sorting
  - Support for sorting contacts by name via sortBy and sortOrder query parameters.
- Filtering
  - Ability to filter contacts by type and isFavourite if implemented.

## 🛠️ Technologies:

- Node.js — JavaScript runtime for server-side development
- Express.js — Web framework for building APIs and web applications
- MongoDB — NoSQL database
- Mongoose — ODM library for MongoDB
- dotenv — Manage environment variables
- morgan — HTTP request logger
- Joi — Input data validation
- Nodemon — Auto-restarts server during development

## Deployment:

The application is deployed on [Render](qwe) using the hw4-validation branch. Ensure that all environment variables are configured correctly.
