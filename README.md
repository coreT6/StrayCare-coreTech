# Stray Animal Welfare Backend (In-memory)

## Overview
This is a Node.js + Express implementation of the API contract `API_CONTRACT.md` provided. It uses in-memory storage (arrays) and exposes Swagger UI at `/api-docs`.

## Setup
Requirements: Node 16+ and npm

Install and run:
```bash
cd backend_stray_api
npm install
npm start
```

The server runs on `http://localhost:3000` by default.
Open API docs at: `http://localhost:3000/api-docs`

## Notes on authentication
- Register a user at `POST /api/users/register`.
- Login at `POST /api/users/login` to receive a JWT.
- Include the header `Authorization: Bearer <token>` for protected endpoints.
- The `PATCH /api/animals/:id/status` endpoint requires role `shelter` (or `admin`).

## Deliverables
- Place this `backend_stray_api` folder inside your GitHub repo under `/backend` and push.
- The Swagger UI is available at `/api-docs` when running the server locally. If deployed, include the deployed `/api-docs` URL in your submission comments.
