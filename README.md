# Common Module for Microservices

A shared npm package containing reusable logic, classes, and middlewares used across multiple microservices in a Node.js-based microservices architecture.

## 📦 What’s Included

This module centralizes and exports the following utilities:

### 🧠 Middlewares

- **`validateRequest`** – Validates the request body using `express-validator`.
- **`errorHandler`** – Custom Express error handler.
- **`currentUser`** – Middleware to decode and attach the current user from JWT token.
- **`requireAuth`** – Middleware to restrict access to authenticated users only.
- **`NotFoundError` / `BadRequestError` / `NotAuthorizedError` / `RequestValidationError`** – Custom error classes.

### 📣 Events & Base Classes

- **`Publisher`** and **`Listener`** – Base classes built around NATS streaming server.
- **`Subjects`** – Enum defining event subjects.
- **Events** – Interfaces for event contracts (e.g., `TicketCreatedEvent`, `OrderCancelledEvent`).

## 🚀 Getting Started

### Install

```bash
# install module
npm install @car-parts/common
```

---

## Usage Example

```ts
import {
  requireAuth,
  validateRequest,
  BadRequestError,
} from '@abtickets-app/common';

app.post('/api/resource', requireAuth, validateRequest, (req, res) => {
  if (!req.body.title) {
    throw new BadRequestError('Title is required');
  }

  res.status(201).send({ success: true });
});
```
