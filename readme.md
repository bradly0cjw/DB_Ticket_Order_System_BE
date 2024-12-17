# Ticket Order System BackEnd


# Backend Application

This project is a backend application built with Node.js and Express. It is designed to be containerized using Docker and orchestrated with Docker Compose.

## Project Structure

```
TOS_BE
├── src
│   ├── index.js          # Entry point of the application
│   ├── controllers       # Contains business logic for routes
│   ├── routes            # Defines application routes
│   └── models            # Data models and schemas
├── Dockerfile             # Dockerfile for building the application image
├── docker-compose.yml     # Docker Compose configuration
├── package.json           # npm configuration file
└── README.md              # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd backend-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Build the Docker image:**
   ```
   docker build -t backend-app .
   ```

4. **Run the application using Docker Compose:**
   ```
   docker-compose up
   ```

## Usage

- The application runs on `http://localhost:3000`.
- You can access the following endpoints:
  - `GET /` - Redirects to the ticket service.
  - `GET /users` - Retrieves a list of users.
  - `POST /users` - Creates a new user.
  - `GET /ping` - Simple ping endpoint.

## License

This project is licensed under the MIT License.