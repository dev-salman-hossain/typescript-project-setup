# Backend Project Setup

A modern industry-level backend setup using:

- Express.js
- TypeScript
- Modular Architecture
- Zod Validation
- Middleware Pattern
- Reusable Response Handler

---

# Project Structure

```txt
src/
│
├── app/
│   ├── middleware/
│   │   ├── notFound.ts
│   │   └── validateSchema.ts
│   │
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.route.ts
│   │   │   ├── auth.service.ts
│   │   │   └── auth.validation.ts
│   │   │
│   │   ├── hotel/
│   │   │
│   │   └── room/
│   │
│   └── routes/
│       └── routes.ts
│
├── config/
│   └── env.ts
│
├── types/
│   └── index.ts
│
├── utils/
│   ├── ApiResponse.ts
│   └── sendResponse.ts
│
├── app.ts
├── server.ts
│
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
```

---

# Installation

## Clone Project

```bash
git clone [<repository-url>](https://github.com/Salman472/typescript-project-setup.git)
```

## Move Into Project

```bash
cd backend-project
```

## Install Dependencies

```bash
pnpm install
```

---

# Run Project

## Development Mode

```bash
pnpm dev
```

## Build Project

```bash
pnpm build
```

## Production Mode

```bash
pnpm start
```

---

# Environment Variables

Create a `.env` file in the root directory.

```env
PORT=4000
NODE_ENV=development
```

---

# Tech Stack

- Express.js
- TypeScript
- Zod
- CORS
- Cookie Parser
- Modular Pattern
- REST API

---

# API Base URL

```txt
http://localhost:4000/api/v1
```

---

# Auth Routes

## Login

```http
POST /api/v1/auth/login
```

### Request Body

```json
{
  "email": "salman@gmail.com",
  "password": "123456"
}
```

### Success Response

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "email": "salman@gmail.com",
    "token": "jwt-token-demo"
  }
}
```

---

# Architecture Overview

This project follows a modular architecture.

```txt
Client
   ↓
Route
   ↓
Middleware
   ↓
Controller
   ↓
Service
   ↓
Database
   ↓
Response
```

---

# Module Pattern

Every feature has its own module.

Example:

```txt
auth/
 ├── auth.controller.ts
 ├── auth.route.ts
 ├── auth.service.ts
 └── auth.validation.ts
```

---

# Folder Responsibilities

## app.ts

Main Express application setup.

Handles:

- middleware
- parser
- routes
- cors
- cookies

---

## server.ts

Starts the server and handles:

- unhandled rejection
- uncaught exception
- graceful shutdown

---

## controller

Handles request and response.

---

## service

Contains business logic.

Example:

- database query
- JWT generation
- password compare

---

## validation

Handles Zod validation schema.

---

## middleware

Reusable request processing functions.

---

## utils

Reusable helper functions.

Example:

- sendResponse
- ApiResponse

---

# Features

- Modular Folder Structure
- Reusable Response Handler
- Validation Middleware
- Clean Code Structure
- Industry Standard Setup
- Scalable Architecture

---

# Future Improvements

- MongoDB & Mongoose
- JWT Authentication
- Refresh Token
- Role Based Access
- Global Error Handler
- Query Builder
- Pagination
- File Upload
- Cloudinary
- Redis
- Docker

---

# Scripts

```json
"scripts": {
  "dev": "tsx watch src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}
```

---

# Author

Mohammad Salman Hossain

Junior MERN Stack Developer
\n## Product Endpoints\n- `POST /api/v1/products` - Create a new product. Requires authentication.\n
## Order Endpoints
- `POST /api/v1/orders` - Place a new order.
- `GET /api/v1/orders/my-orders` - Retrieve your orders.
- `GET /api/v1/orders/:orderId` - View order details.
- `PATCH /api/v1/orders/:orderId/status` - Update order status (Admin only).
