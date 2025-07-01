# 🗓️ Event Management Web Application

A full-featured **Event Management Web App** built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). This application supports **custom authentication**, **dynamic event operations**, **search and filter features**, and an intuitive UI designed for performance and ease of use.

---

## 🔗 Live Demo

(https://event-management-ivory.vercel.app/)

---

## 📌 Features

### 🔐 Authentication
- Custom-built login and registration (no third-party auth packages)
- Secure login using email and password
- Session handling with protected routes
- User profile picture displayed on navbar when logged in
- Logout option in dropdown under profile picture

---

### 🧭 Navigation Bar
- Logo + Website Name
- Navigation links:
  - Home
  - Events (🔒 Private)
  - Add Event (🔒 Private)
  - My Events (🔒 Private)
  - Sign In / Profile Picture
- Dropdown (on profile picture click):
  - Username (display only)
  - Logout button

---

### 🏠 Homepage
- Fully customized homepage (designed freely as per UI/UX goals)

---

### 📅 Events Page (🔒 Private Route)
Displays all events in **descending order** (latest first). Each event card contains:
- Event Title
- Name of creator
- Date and Time
- Location
- Description
- Attendee Count
- `Join Event` button

#### 🧠 Event Logic
- `Join Event`: Increments attendee count by 1 (once per user)
- Search: Filter events by **title**
- Filters:
  - Today’s Date
  - Current Week
  - Last Week
  - Current Month
  - Last Month

---

### ➕ Add Event Page (🔒 Private Route)
Allows users to submit a new event using a form:

**Form Fields:**
- Event Title
- Name (Auto-filled)
- Date and Time
- Location
- Description
- Attendee Count (default: 0)

On submission, the event is stored in **MongoDB**.

---

### 📁 My Events Page (🔒 Private Route)
Displays **only the events** added by the **logged-in user**. Each event card includes:
- Event Title
- Name
- Date and Time
- Location
- Description
- Attendee Count
- `Update` button
- `Delete` button

#### ✏️ Update Event
- Opens a modal or separate route with editable fields
- Submits updated data to server

#### ❌ Delete Event
- Confirmation dialog before deletion
- On confirm, the event is removed from the database

---

## 🔒 Custom Authentication System

### 📄 Registration Page
Fields:
- Name
- Email
- Password
- Photo URL

### 🔐 Login Page
Fields:
- Email
- Password

### ⚠️ Error Handling
- Displays validation and login errors such as:
  - Missing fields
  - Incorrect credentials
  - Duplicate email

---

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| **MongoDB** | Database for storing user and event data |
| **Express.js** | Backend framework for APIs and auth |
| **React.js** | Frontend framework for building UI |
| **Node.js** | Server runtime environment |
| **JWT/Cookies** | (If implemented) For managing auth sessions |
| **Tailwind CSS / ShadCN** | (Optional) For responsive and modern UI |

---

## 📁 Project Structure (Brief Overview)

