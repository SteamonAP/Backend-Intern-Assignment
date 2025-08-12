# 🧠 Activity Booking API - Backend Developer Assignment 

## 📋 Overview

This is a fully functional REST API built with Node.js, Express, and MongoDB for an **Activity Booking Platform**. It includes authentication, activity listing, booking functionality, and booking history.

---

## ✅ Features

- 🔐 JWT-based Authentication (with secure HttpOnly cookies)
- 📅 Activity Listing (public)
- 📝 User Signup & Login
- 📌 Book Activities (protected)
- 📖 View My Bookings (protected)
- 📦 MongoDB with Mongoose
- ✅ Input Validation using express-validator
- 🌐 Deployed on Render (Live)

---

## 🔗 Live API URL

👉 https://backend-intern-assignment-evo4.onrender.com

---

## 📮 Postman Collection

🔗 [Click to View Collection](https://assignment-0634.postman.co/workspace/Activity-Booking-API---MeetX-As~2f148b0d-fc80-42ab-9840-f0f16c723a60/collection/38024784-ab94b7dc-81c4-4091-8a85-5f2f1fc68833?action=share&creator=38024784&active-environment=38024784-f1c68e56-7c6b-407d-b052-0425884c18eb)

---

## 🧪 API Endpoints

### 🧍‍♂️ Auth
| Method | Endpoint             | Description           |
|--------|----------------------|-----------------------|
| POST   | `/api/auth/signup`   | Register a user       |
| POST   | `/api/auth/login`    | Login and get JWT     |
| POST   | `/api/auth/logout`   | Clear JWT cookie      |

---

### 🎯 Activities
| Method | Endpoint                               | Description            |
|--------|----------------------------------------|------------------------|
| GET    | `/api/activity/availableactivities`     | List all activities    |
| GET    | `/api/activity/availableactivities/:id` | Get one activity       |

---

### 📌 Bookings
| Method | Endpoint                                      | Description                    |
|--------|-----------------------------------------------|--------------------------------|
| POST   | `/api/bookmyactivity/booking/:activityId`     | Book an activity (auth only)   |
| GET    | `/api/bookmyactivity/mybooking`               | Get my bookings (auth only)    |

---

## 🔧 Setup Locally

```bash
git clone https://github.com/SteamonAP/Backend-Intern-Assignment.git
cd Backend-Intern-Assignment
npm install
