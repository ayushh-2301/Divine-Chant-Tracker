# API Documentation

## Recitations API

### GET /api/recitations
Retrieve recitation data for a user.

**Query Parameters:**
- `userId` (optional): Filter recitations by user ID

**Response:**
```json
{
  "recitations": [
    {
      "id": "1",
      "userId": "1",
      "godName": "Ram",
      "count": 108,
      "date": "2023-05-15T10:30:00Z"
    }
  ]
}
```

### POST /api/recitations
Create a new recitation record.

**Request Body:**
```json
{
  "userId": "1",
  "godName": "Krishna",
  "count": 54
}
```

**Response:**
```json
{
  "success": true,
  "recitation": {
    "id": "2",
    "userId": "1",
    "godName": "Krishna",
    "count": 54,
    "date": "2023-05-15T10:30:00Z"
  }
}
```

## Goals API

### GET /api/goals
Retrieve goals for a user.

**Query Parameters:**
- `userId` (required): Filter goals by user ID

### POST /api/goals
Create or update a user goal.

**Request Body:**
```json
{
  "userId": "1",
  "deityName": "Ram",
  "dailyTarget": 108
}
```

## Users API

### GET /api/users/{id}
Retrieve user profile information.

### PUT /api/users/{id}
Update user profile information.

## Authentication API

### POST /api/auth/login
Authenticate a user.

### POST /api/auth/logout
End user session.

### POST /api/auth/signup
Create a new user account.