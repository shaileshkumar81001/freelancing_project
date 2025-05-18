# Freelancing Site

A full-stack application for freelancers and clients to connect and collaborate.

## Features

- User authentication (register, login, logout)
- User profiles
- MySQL database for data storage
- RESTful API
- React frontend with Material UI

## Prerequisites

- Node.js (v14 or higher)
- MySQL (v8 or higher)
- npm or yarn

## Setup

### Database Setup

1. Create a MySQL database:
   ```sql
   CREATE DATABASE freelancing_db;
   ```

2. Update the `.env` file in the `server` directory with your MySQL credentials:
   ```
   DB_HOST=localhost
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=freelancing_db
   PORT=5000
   JWT_SECRET=your_jwt_secret_key
   ```

### Backend Setup

1. Navigate to the server directory:
   ```
   cd server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm run dev
   ```

### Frontend Setup

1. Navigate to the project root directory:
   ```
   cd freelancing-site
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

## API Endpoints

### Users

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login a user
- `GET /api/users` - Get all users (protected)
- `GET /api/users/:id` - Get user by ID (protected)
- `PUT /api/users/:id` - Update user (protected)
- `DELETE /api/users/:id` - Delete user (protected)

## Project Structure

```
freelancing-site/
├── public/
├── server/
│   ├── config/
│   │   └── db.js
│   │   ├── controllers/
│   │   │   └── userController.js
│   │   ├── middleware/
│   │   │   └── authMiddleware.js
│   │   ├── models/
│   │   │   └── userModel.js
│   │   ├── routes/
│   │   │   └── userRoutes.js
│   │   ├── .env
│   │   ├── package.json
│   │   └── server.js
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── UserProfile.jsx
│   │   ├── services/
│   │   │   └── userService.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── README.md
```

## Technologies Used

- **Frontend**: React, Material UI, React Router
- **Backend**: Node.js, Express
- **Database**: MySQL
- **Authentication**: JWT

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
