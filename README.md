<p align="center">
  <img src="avtar.jpeg" alt="College ERP Logo" width="120" />
</p>

<h1 align="center">🎓 College ERP System</h1>

<p align="center">
  A full-stack <strong>Enterprise Resource Planning</strong> system for educational institutions, built with the <strong>MERN stack</strong> and <strong>Redux</strong> state management. It provides role-based dashboards for <em>Admins</em>, <em>Faculty</em>, and <em>Students</em> to manage academics, attendance, examinations, and notices.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-17.0.2-61DAFB?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Redux-4.1.2-764ABC?logo=redux" alt="Redux" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?logo=node.js" alt="Node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb" alt="MongoDB" />
  <img src="https://img.shields.io/badge/MUI-5.4-007FFF?logo=mui" alt="MUI" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.0-06B6D4?logo=tailwindcss" alt="TailwindCSS" />
</p>

---

## 📖 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Environment Variables](#-environment-variables)
- [Running the Project](#-running-the-project)
- [Build & Deployment](#-build--deployment)
- [API Documentation](#-api-documentation)
- [Database Schema](#-database-schema)
- [Testing](#-testing)
- [Troubleshooting / Common Issues](#-troubleshooting--common-issues)
- [Contributing Guidelines](#-contributing-guidelines)
- [License](#-license)

---

## 🌟 Project Overview

**College ERP** is a web-based enterprise resource planning application designed for colleges and universities. It streamlines administrative tasks by providing dedicated portals for three user roles:

| Role | Purpose |
|------|---------|
| **Admin** | Manage departments, faculty, students, subjects, notices, and other admins |
| **Faculty** | Create tests, upload marks, and mark student attendance |
| **Student** | View test results, attendance records, and enrolled subjects |

The system features JWT-based authentication, password management workflows (including first-time password change), profile management with avatar uploads, and a notice board system.

---

## ✨ Features

### 🔐 Authentication & Authorization
- Role-based login (Admin / Faculty / Student)
- JWT token-based session management
- First-time password change enforcement
- Password update functionality

### 👨‍💼 Admin Panel
- **User Management** — Add, view, and delete Admins, Faculty, and Students
- **Academic Management** — Add, view, and delete Departments and Subjects
- **Notice Board** — Create and broadcast notices
- **Profile Management** — Update profile details and avatar

### 👨‍🏫 Faculty Portal
- **Test Management** — Create tests for subjects
- **Marks** — Upload student marks for tests
- **Attendance** — Mark student attendance per subject
- **Profile Management** — Update profile details and avatar

### 👨‍🎓 Student Portal
- **Academic View** — View enrolled subjects list
- **Test Results** — View test scores and performance
- **Attendance** — View attendance records
- **Profile Management** — Update profile details and avatar

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 17** | UI library |
| **Redux 4 + Redux Thunk** | State management with async actions |
| **React Router v6** | Client-side routing |
| **Material UI (MUI) v5** | Component library & icons |
| **TailwindCSS 3** | Utility-first CSS styling |
| **Axios** | HTTP client for API calls |
| **jwt-decode** | Client-side JWT token decoding |
| **react-file-base64** | Avatar / image file upload |
| **react-calendar** | Calendar UI component |

### Backend
| Technology | Purpose |
|------------|---------|
| **Node.js + Express 4** | REST API server |
| **MongoDB + Mongoose 6** | NoSQL database & ODM |
| **bcryptjs** | Password hashing |
| **jsonwebtoken (JWT)** | Authentication tokens |
| **cors** | Cross-Origin Resource Sharing |
| **dotenv** | Environment variable management |
| **body-parser** | Request body parsing |
| **nodemon** | Development auto-restart |

---

## 📁 Project Structure

```
CollegeERP/
├── client/                         # React Frontend Application
│   ├── public/                     # Static assets & index.html
│   │   ├── _redirects              # Netlify redirect rules
│   │   └── index.html              # HTML entry point
│   ├── src/
│   │   ├── App.js                  # Root component with route definitions
│   │   ├── index.js                # React DOM entry point (Redux store setup)
│   │   ├── index.css               # Global styles
│   │   ├── components/
│   │   │   ├── admin/              # Admin dashboard & CRUD components
│   │   │   │   ├── AdminHome.js    # Admin home page
│   │   │   │   ├── Body.js         # Admin dashboard body/stats
│   │   │   │   ├── Header.js       # Admin header/navbar
│   │   │   │   ├── Sidebar.js      # Admin sidebar navigation
│   │   │   │   ├── addAdmin/       # Add new admin
│   │   │   │   ├── addDepartment/  # Add department
│   │   │   │   ├── addFaculty/     # Add faculty member
│   │   │   │   ├── addStudent/     # Add student
│   │   │   │   ├── addSubject/     # Add subject
│   │   │   │   ├── createNotice/   # Create notice/announcement
│   │   │   │   ├── deleteAdmin/    # Delete admin
│   │   │   │   ├── deleteDepartment/
│   │   │   │   ├── deleteFaculty/
│   │   │   │   ├── deleteStudent/
│   │   │   │   ├── deleteSubject/
│   │   │   │   ├── getFaculty/     # View all faculty
│   │   │   │   ├── getStudent/     # View all students
│   │   │   │   ├── getSubject/     # View all subjects
│   │   │   │   └── profile/        # Admin profile & password management
│   │   │   ├── faculty/            # Faculty dashboard components
│   │   │   │   ├── FacultyHome.js
│   │   │   │   ├── Body.js
│   │   │   │   ├── Header.js
│   │   │   │   ├── Sidebar.js
│   │   │   │   ├── createTest/     # Create test/exam
│   │   │   │   ├── markAttendance/ # Mark student attendance
│   │   │   │   ├── uploadMarks/    # Upload test marks
│   │   │   │   └── profile/        # Faculty profile management
│   │   │   ├── student/            # Student dashboard components
│   │   │   │   ├── StudentHome.js
│   │   │   │   ├── Body.js
│   │   │   │   ├── Header.js
│   │   │   │   ├── Sidebar.js
│   │   │   │   ├── attendance/     # View attendance records
│   │   │   │   ├── subjectList/    # View enrolled subjects
│   │   │   │   ├── testResult/     # View test results
│   │   │   │   └── profile/        # Student profile management
│   │   │   ├── login/              # Login pages (Admin, Faculty, Student)
│   │   │   └── notices/            # Notice display components
│   │   ├── redux/
│   │   │   ├── actionTypes.js      # Redux action type constants
│   │   │   ├── actions/            # Redux action creators
│   │   │   │   ├── adminActions.js
│   │   │   │   ├── facultyActions.js
│   │   │   │   └── studentActions.js
│   │   │   ├── api/                # Axios API configuration
│   │   │   └── reducers/           # Redux reducers
│   │   │       ├── index.js        # Combined root reducer
│   │   │       ├── adminReducer.js
│   │   │       ├── facultyReducer.js
│   │   │       ├── studentReducer.js
│   │   │       └── errorReducer.js
│   │   └── utils/
│   │       ├── Spinner.js          # Loading spinner component
│   │       └── styles.js           # Shared MUI styles
│   ├── .env                        # Frontend environment variables
│   ├── package.json
│   └── tailwind.config.js          # TailwindCSS configuration
│
├── server/                         # Node.js Backend Application
│   ├── index.js                    # Express app entry point
│   ├── config/
│   │   └── db.js                   # MongoDB connection setup
│   ├── middleware/
│   │   └── auth.js                 # JWT authentication middleware
│   ├── models/                     # Mongoose schema definitions
│   │   ├── admins.js
│   │   ├── faculties.js
│   │   ├── students.js
│   │   ├── departments.js
│   │   ├── subjects.js
│   │   ├── tests.js
│   │   ├── marks.js
│   │   ├── attendences.js
│   │   └── notices.js
│   ├── controller/                 # Route handler logic
│   │   ├── adminController.js      # All admin endpoints
│   │   ├── facultyController.js    # All faculty endpoints
│   │   └── studentController.js    # All student endpoints
│   ├── routes/                     # Express route definitions
│   │   ├── adminRoutes.js
│   │   ├── facultyRoutes.js
│   │   └── studentRoutes.js
│   ├── .env                        # Backend environment variables
│   ├── Procfile                    # Heroku deployment config
│   └── package.json
│
└── README.md
```

---

## 📋 Prerequisites

Ensure you have the following installed:

| Requirement | Version |
|-------------|---------|
| **Node.js** | v14+ recommended |
| **npm** | v6+ (comes with Node.js) |
| **MongoDB** | v5+ (local install or MongoDB Atlas) |
| **Git** | Latest |

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/SmitBorsadiya/CollegeERP.git
cd CollegeERP
```

### 2. Install Server Dependencies

```bash
cd server
npm install
```

### 3. Install Client Dependencies

```bash
cd ../client
npm install
```

### 4. Configure Environment Variables

Set up `.env` files for both the server and client (see [Environment Variables](#-environment-variables) section below).

### 5. Start MongoDB

If using a local MongoDB instance:

```bash
mongod
```

Or configure `MONGODB_URL` in `server/.env` to point to your MongoDB Atlas cluster.

---

## 🔑 Environment Variables

### Server (`server/.env`)

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URL` | MongoDB connection string | `mongodb://localhost:27017/CollegeERP` |
| `JWT_SECRET` | Secret key for JWT signing | `your_jwt_secret_here` |
| `PORT` | Server port number | `5000` |

```env
MONGODB_URL=mongodb://localhost:27017/CollegeERP
JWT_SECRET=your_jwt_secret_here
PORT=5000
```

### Client (`client/.env`)

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_API_URL` | Backend API base URL | `http://localhost:5000/` |

```env
REACT_APP_API_URL=http://localhost:5000/
```

> ⚠️ **Important:** Never commit `.env` files with real secrets to version control. Update `JWT_SECRET` with a strong, unique secret for production.

---

## ▶️ Running the Project

### Start the Backend Server

```bash
cd server
npm start
```

The server will start on `http://localhost:5000` with **nodemon** for auto-reload on file changes.

### Start the Frontend Dev Server

```bash
cd client
npm start
```

The React app will start on `http://localhost:3000` and proxy API calls to the backend.

### Running Both Simultaneously

Open two terminal windows and run the above commands in each. For the initial admin setup, use the admin signup endpoint to create the first admin account:

```
POST http://localhost:5000/api/admin/signup
```

---

## 🏗 Build & Deployment

### Frontend Production Build

```bash
cd client
npm run build
```

This creates an optimized production build in `client/build/`.

### Heroku Deployment (Server)

The server includes a `Procfile` for Heroku deployment:

```
web: npm run start
```

**Steps:**

1. Create a Heroku app and add the **MongoDB Atlas** connection URL to config vars.
2. Set `JWT_SECRET` and `PORT` in Heroku environment variables.
3. Deploy the `server/` directory to Heroku.

### Netlify Deployment (Client)

The client includes a `_redirects` file for Netlify SPA routing:

```
/*    /index.html    200
```

**Steps:**

1. Build the client: `npm run build`
2. Deploy the `client/build/` folder to Netlify.
3. Set `REACT_APP_API_URL` to your deployed server URL.

---

## 📡 API Documentation

All API routes are prefixed and grouped by role. Protected routes require a JWT token in the `Authorization` header as `Bearer <token>`.

### Admin Routes — `/api/admin`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/login` | ❌ | Admin login |
| POST | `/signup` | ❌ | Admin registration |
| POST | `/updatepassword` | ✅ | Update password |
| POST | `/updateprofile` | ✅ | Update admin profile |
| POST | `/addadmin` | ✅ | Add a new admin |
| POST | `/adddepartment` | ✅ | Add a new department |
| POST | `/addfaculty` | ✅ | Add a new faculty member |
| POST | `/addstudent` | ✅ | Add a new student |
| POST | `/addsubject` | ✅ | Add a new subject |
| POST | `/createnotice` | ✅ | Create a notice |
| GET | `/getallstudent` | ✅ | Get all students |
| GET | `/getallfaculty` | ✅ | Get all faculty |
| GET | `/getalldepartment` | ✅ | Get all departments |
| GET | `/getallsubject` | ✅ | Get all subjects |
| GET | `/getalladmin` | ✅ | Get all admins |
| POST | `/getfaculty` | ✅ | Get specific faculty |
| POST | `/getstudent` | ✅ | Get specific student |
| POST | `/getsubject` | ✅ | Get specific subject |
| POST | `/getadmin` | ✅ | Get specific admin |
| POST | `/getnotice` | ✅ | Get notices |
| POST | `/deleteadmin` | ✅ | Delete an admin |
| POST | `/deletefaculty` | ✅ | Delete a faculty member |
| POST | `/deletestudent` | ✅ | Delete a student |
| POST | `/deletedepartment` | ✅ | Delete a department |
| POST | `/deletesubject` | ✅ | Delete a subject |

### Faculty Routes — `/api/faculty`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/login` | ❌ | Faculty login |
| POST | `/updatepassword` | ✅ | Update password |
| POST | `/updateprofile` | ✅ | Update faculty profile |
| POST | `/createtest` | ✅ | Create a new test |
| POST | `/gettest` | ✅ | Get tests |
| POST | `/getstudent` | ✅ | Get students for a subject |
| POST | `/uploadmarks` | ✅ | Upload marks for a test |
| POST | `/markattendance` | ✅ | Mark student attendance |

### Student Routes — `/api/student`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/login` | ❌ | Student login |
| POST | `/updatepassword` | ✅ | Update password |
| POST | `/updateprofile` | ✅ | Update student profile |
| POST | `/testresult` | ✅ | Get test results |
| POST | `/attendance` | ✅ | Get attendance records |

---

## 🗄 Database Schema

The application uses **MongoDB** with **Mongoose** ODM. Below are the collections and their key fields:

| Collection | Key Fields | Description |
|------------|------------|-------------|
| **admins** | `name`, `email`, `password`, `department`, `joiningYear`, `avatar`, `contactNumber`, `dob`, `passwordUpdated` | Administrator accounts |
| **faculties** | `name`, `email`, `password`, `designation`, `department`, `joiningYear`, `gender`, `dob`, `avatar`, `contactNumber`, `passwordUpdated` | Faculty member accounts |
| **students** | `name`, `email`, `password`, `year`, `department`, `section`, `batch`, `gender`, `dob`, `fatherName`, `motherName`, `avatar`, `subjects[]`, `contactNumber`, `passwordUpdated` | Student accounts |
| **departments** | `department`, `departmentCode` (unique) | Academic departments |
| **subjects** | `subjectName`, `subjectCode`, `department`, `year`, `totalLectures` | Course subjects |
| **tests** | `test`, `subjectCode`, `department`, `totalMarks`, `year`, `section`, `date` | Examination records |
| **marks** | `exam` (ref: tests), `student` (ref: students), `marks` | Student marks per test |
| **attendences** | `student` (ref: students), `subject` (ref: subjects), `totalLecturesByFaculty`, `lectureAttended` | Attendance tracking |
| **notices** | `topic`, `date`, `content`, `from`, `noticeFor` | Announcements & notices |

---

## 🧪 Testing

The client includes basic testing setup with:

- **@testing-library/react** — Component rendering tests
- **@testing-library/jest-dom** — Custom DOM matchers
- **@testing-library/user-event** — User interaction simulation

Run tests:

```bash
cd client
npm test
```

---

## 🔧 Troubleshooting / Common Issues

### MongoDB Connection Errors

- **Issue:** `Error connecting to MongoDB` on server start.
- **Fix:** Ensure MongoDB is running locally (`mongod`) or that your `MONGODB_URL` in `server/.env` is correct. For MongoDB Atlas, ensure your IP is whitelisted.

### Port Already in Use

- **Issue:** `EADDRINUSE: address already in use :::5000`
- **Fix:** Kill the process using port 5000 or change the `PORT` in `server/.env`.

### CORS Errors

- **Issue:** API calls blocked by CORS policy.
- **Fix:** The server uses the `cors` middleware. Ensure the client `REACT_APP_API_URL` matches the running server URL exactly (including trailing slash).

### First-Time Login

- **Issue:** Cannot login as faculty or student.
- **Fix:** Admin must first create faculty/student accounts via the admin panel. The initial admin account is created using the `/api/admin/signup` endpoint.

### Passwords

- **Issue:** Default passwords don't work.
- **Fix:** When an admin creates a faculty/student account, a default password is set. On first login, users are prompted to change their password. The `passwordUpdated` flag tracks this.

### Client Environment Issues

- **Issue:** API calls returning 404 or network errors.
- **Fix:** Verify `REACT_APP_API_URL` in `client/.env` matches your server's running address. Restart the client after editing `.env` files.

### Node Version Compatibility

- **Issue:** Build or dependency errors.
- **Fix:** Use Node.js v14–v18 for best compatibility with the project dependencies.
