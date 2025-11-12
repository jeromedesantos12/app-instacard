# Instacard

Instacard is a full-stack application that allows users to create a personalized page with links to their social media profiles and other websites, similar to Linktree. It features a user dashboard for managing links and a public page for sharing them.

## Project Structure

The project is a monorepo with two main parts:

- `backend/`: A Node.js and Express application that serves as the API.
- `frontend/`: A Next.js application for the user interface.

```
.
├── backend/
│   ├── prisma/         # Prisma schema and migrations
│   ├── src/
│   │   ├── controllers/  # Request handlers
│   │   ├── routes/       # API routes
│   │   └── ...
│   ├── .env            # Environment variables
│   └── package.json
└── frontend/
    ├── app/
    │   ├── (app)/        # Authenticated routes (dashboard)
    │   ├── (auth)/       # Auth routes (login, register)
    │   └── (public)/     # Public user pages
    ├── components/     # React components
    ├── services/       # API service calls
    ├── stores/         # Redux state management
    └── package.json
```

## Features

- **User Authentication**: Sign up, log in, and manage user sessions with JWT.
- **Google OAuth**: Users can sign up or log in using their Google account.
- **Public Profile Pages**: Each user gets a public page (`/[username]`) to display their links.
- **Link Management**: Users can add, edit, and delete links on their profile.
- **Social Media Integration**: Users can add links to their social media profiles (GitHub, YouTube, etc.).
- **Profile Customization**: Users can update their profile information, including bio and avatar.

## Tech Stack

**Backend:**

- **Framework**: Express.js
- **Language**: TypeScript
- **ORM**: Prisma with Prisma Accelerate
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens), bcrypt
- **API Documentation**: Swagger
- **File Uploads**: Multer
- **Caching**: Redis
- **AI**: Google Gemini

**Frontend:**

- **Framework**: Next.js (with Turbopack)
- **Language**: TypeScript
- **UI**: React
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: Redux Toolkit
- **Form Management**: React Hook Form with Zod for validation
- **HTTP Client**: Axios

## Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later recommended)
- [Bun](https://bun.sh/)
- [Git](https://git-scm.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd app-instacard
    ```

2.  **Set up the Backend:**

    ```bash
    cd backend
    bun install
    ```

    - Create a `.env` file by copying `.env.example` and fill in the required variables (see Environment Variables section).
    - Run database migrations:

    ```bash
    bunx prisma migrate dev
    ```

    - Start the backend server:

    ```bash
    bun run dev
    ```

3.  **Set up the Frontend:**
    ```bash
    cd ../frontend
    bun install
    ```
    - Start the frontend development server:
    ```bash
    bun run dev
    ```

The frontend will be available at `http://localhost:8080` and the backend at `http://localhost:3000`.

## API Endpoints

The API routes are versioned under `/api/v1`.

- `POST /api/v1/auth/register`: Register a new user.
- `POST /api/v1/auth/login`: Log in a user.
- `GET /api/v1/auth/google`: Initiate Google OAuth flow.
- `GET /api/v1/user/me`: Get current user's profile.
- `PUT /api/v1/user/update`: Update user's profile.
- `GET /api/v1/user/public/:username`: Get a user's public profile.
- `POST /api/v1/link/create`: Create a new link.
- `PUT /api/v1/link/update/:id`: Update a link.
- `DELETE /api/v1/link/delete/:id`: Delete a link.
- `POST /api/v1/social/create`: Create a new social link.
- `PUT /api/v1/social/update/:id`: Update a social link.
- `DELETE /api/v1/social/delete/:id`: Delete a social link.

For a detailed API specification, you can refer to the Swagger documentation.

## Environment Variables

The backend requires the following environment variables to be set in a `.env` file. Create this file in the `backend` directory.

```env
# Application
NODE_ENV=development
API_VERSION="v1"
BASE_URL="http://localhost:3000"
CORS_URL="http://localhost:8080"

# Security
JWT_SECRET="your-jwt-secret"

# Database (Prisma with Accelerate)
DATABASE_URL="your-prisma-accelerate-database-url"

# Google OAuth 2.0
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GOOGLE_REDIRECT_URI="http://localhost:3000/api/v1/auth/google/callback"

# Google Gemini AI
GEMINI_API_KEY="your-gemini-api-key"
MODEL_NAME="gemini-1.5-flash"
```
