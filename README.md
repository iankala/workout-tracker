# 💪 Workout Tracker

A full-stack workout tracking application with a React frontend and a Node.js/Express backend.

---

## About

Workout Tracker lets users log and monitor their workouts. It features a separated frontend and backend architecture, making it a great example of a full-stack MERN project.

---

## Features

- Log and track workouts
- Full-stack architecture (frontend + backend)
- RESTful backend API
- Persistent data storage with MongoDB
- JWT-based authentication

---

## Tech Stack

- **Frontend** — React, Tailwind CSS, Axios
- **Backend** — Node.js, Express, Mongoose
- **Database** — MongoDB Atlas
- **Auth** — JSON Web Tokens (JWT)

---

## Prerequisites

Make sure you have the following installed before you begin:

- [Node.js](https://nodejs.org/) (comes with npm)
- [Git](https://git-scm.com/)
- A [MongoDB Atlas](https://cloud.mongodb.com/) account

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/iankala/workout-tracker.git
cd workout-tracker
```

---

### 2. Set up the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` folder:

```
PORT=4000
MONGODB_URI=your_mongodb_connection_string_here
SECRET=your_jwt_secret_here
```

> **How to get your MongoDB connection string:**
> 1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
> 2. Click your cluster → **Connect** → **Drivers**
> 3. Copy the connection string and replace `<password>` with your database user's password
> 4. Also go to **Network Access** and add your IP address (or use `0.0.0.0/0` to allow all)

Start the backend server:

```bash
npm run dev
```

The backend will run on `http://localhost:4000`

---

### 3. Set up the Frontend

Open a new terminal window:

```bash
cd frontend
npm install --legacy-peer-deps
npm start
```

The frontend will run on `http://localhost:3000`

---

## Project Structure

```
workout-tracker/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env          ← you create this
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── index.html
└── .gitignore
```

---

## Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Port the backend runs on (default: 4000) |
| `MONGODB_URI` | MongoDB Atlas connection string |
| `SECRET` | Secret key used for JWT authentication |

> ⚠️ Never commit your `.env` file to GitHub. Make sure it is listed in `.gitignore`.

---

## Common Issues

### `MONGODB_URI is undefined`
Make sure your `.env` file is in the `backend/` folder and the variable is named exactly `MONGODB_URI` with no spaces around the `=`.

### `Module parse failed: import and export`
Make sure `"type": "commonjs"` is **not** in your frontend `package.json`. Remove that line if it exists, then run:
```bash
Remove-Item -Recurse -Force node_modules   # PowerShell
npm install --legacy-peer-deps
npm start
```

### `ECONNREFUSED` MongoDB error
Your IP is not whitelisted on MongoDB Atlas. Go to **Network Access** on Atlas and add your current IP.

### node_modules not installing correctly
```bash
Remove-Item -Recurse -Force node_modules   # PowerShell
npm install --legacy-peer-deps
```

---

## Author

**Ian Kala** — [GitHub](https://github.com/iankala)
