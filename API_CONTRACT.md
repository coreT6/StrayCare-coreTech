# API Contract - Stray Animal Welfare Web Application

This document defines the API endpoints for communication between the frontend and backend.

---

## 1. User Registration
**Feature:** Register a new user  
**HTTP Method:** POST  
**Endpoint:** `/api/users/register`  
**Description:** Creates a new user account.

**Request Body:**
```json
{
  "name": "user_name1",
  "email": "user1@example.com",
  "password": "mypassword123",
  "role": "citizen", 
  "phone": "+919876543210"
}
```

**Success Response (201 Created):**
```json
{
  "message": "User registered successfully",
  "user_id": 1
}
```

**Error Response (400 Bad Request):**
```json
{
  "error": "Email already exists"
}
```

---

## 2. User Login
**Feature:** Authenticate user  
**HTTP Method:** POST  
**Endpoint:** `/api/users/login`  
**Description:** Logs in a user and returns a JWT token.

**Request Body:**
```json
{
  "email": "user1@example.com",
  "password": "mypassword123"
}
```

**Success Response (200 OK):**
```json
{
  "token": "jwt_token_here"
}
```

**Error Response (401 Unauthorized):**
```json
{
  "error": "Invalid credentials"
}
```

---

## 3. Report Stray/Injured Animal
**Feature:** Submit a report  
**HTTP Method:** POST  
**Endpoint:** `/api/reports`  
**Description:** Allows a user to report a stray or injured animal.

**Request Body:**
```json
{
  "type": "injured",
  "description": "Dog limping near park",
  "photo_url": "https://example.com/dog.jpg",
  "location": "15.2993, 74.1240"
}
```

**Success Response (201 Created):**
```json
{
  "message": "Report submitted successfully",
  "report_id": 101
}
```

**Error Response (400 Bad Request):**
```json
{
  "error": "Missing required fields"
}
```

---

## 4. View Reported Animals
**Feature:** Get all reports  
**HTTP Method:** GET  
**Endpoint:** `/api/reports`  
**Description:** Retrieves all active reports of stray or injured animals.

**Success Response (200 OK):**
```json
[
  {
    "id": 101,
    "type": "injured",
    "description": "Dog limping near park",
    "photo_url": "https://example.com/dog.jpg",
    "location": "15.2993, 74.1240",
    "status": "pending",
    "reported_by": 1
  }
]
```

---

## 5. Post Lost Pet
**Feature:** Add lost pet listing  
**HTTP Method:** POST  
**Endpoint:** `/api/lostpets`  
**Description:** Allows a pet owner to post about a lost pet.

**Request Body:**
```json
{
  "pet_name": "Bruno",
  "species": "Dog",
  "description": "Brown Labrador, blue collar",
  "last_seen_location": "15.2993, 74.1240",
  "photo_url": "https://example.com/bruno.jpg"
}
```

**Success Response (201 Created):**
```json
{
  "message": "Lost pet posted successfully",
  "pet_id": 201
}
```

---

## 6. View Lost/Found Pet Reports
**Feature:** Get all lost/found pets  
**HTTP Method:** GET  
**Endpoint:** `/api/lostpets`  
**Description:** Retrieves all lost and found pet reports.

**Success Response (200 OK):**
```json
[
  {
    "id": 201,
    "pet_name": "Bruno",
    "species": "Dog",
    "description": "Brown Labrador, blue collar",
    "last_seen_location": "15.2993, 74.1240",
    "photo_url": "https://example.com/bruno.jpg",
    "status": "lost"
  }
]
```

---

## 7. Adoption Listings
**Feature:** View adoptable animals  
**HTTP Method:** GET  
**Endpoint:** `/api/adoptions`  
**Description:** Retrieves a list of animals available for adoption.

**Success Response (200 OK):**
```json
[
  {
    "id": 301,
    "animal_id": 101,
    "species": "Dog",
    "description": "Friendly golden retriever",
    "photo_url": "https://example.com/golden.jpg",
    "status": "available"
  }
]
```

---

## 8. Request Adoption
**Feature:** Submit adoption request  
**HTTP Method:** POST  
**Endpoint:** `/api/adoptions/:id/request`  
**Description:** Allows a user to request adoption for a specific animal.

**Request Body:**
```json
{
  "adopter_id": 1
}
```

**Success Response (200 OK):**
```json
{
  "message": "Adoption request submitted"
}
```

---

## 9. Update Animal Status (Shelter/NGO)
**Feature:** Update rescue/adoption status & health  
**HTTP Method:** PATCH  
**Endpoint:** `/api/animals/:id/status`  
**Description:** Allows shelters/NGOs to update animal status and health records.

**Request Body:**
```json
{
  "status": "rescued",
  "health": "Vaccinated and sterilized"
}
```

**Success Response (200 OK):**
```json
{
  "message": "Animal status updated successfully"
}
```

---

## Authentication Notes
- Endpoints marked for shelters, NGOs, and volunteers require **JWT authentication**.
- Admin-only actions require **role-based access control**.

---

## Error Response Example (500 Internal Server Error)
```json
{
  "error": "Something went wrong, please try again later."
}
```

---
