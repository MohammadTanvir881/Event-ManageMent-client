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
🧩 Summary
This project is a full-stack Event Management Web Application developed using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). It offers users a seamless experience for creating, managing, and joining events. The application emphasizes performance, intuitive design, and data integrity while utilizing custom-built authentication, real-time event filtering, and private user dashboards.

🎯 Objectives
Allow users to register, log in, and manage their own events securely.

Enable creation, listing, joining, editing, and deleting of events.

Offer a clean, responsive UI with search and filtering capabilities to efficiently browse events.

Provide private dashboards where users can manage only their own created events.

Implement all features using custom authentication logic without third-party auth libraries.

🏗️ Core Functionalities
🔐 Authentication System (Custom)
Users can register with name, email, password, and profile photo.

Users can log in using email and password.

Session-based access control using protected/private routes.

Proper validation and error messages for login/register processes.

🧭 Navigation (Navbar)
Displays: Logo + Website Name

Menu Items:

Home

Events (Private)

Add Event (Private)

My Events (Private)

Sign In / Profile Dropdown

When logged in, the user’s profile picture is shown with a dropdown containing their name and a logout button.

🏠 Home Page
Freely designed landing page showcasing the purpose of the application and visual design.

📅 Events Page (Private Route)
Displays all available events in descending order by date and time.

Each event card shows:

Event title

Creator's name

Date and time

Location

Description

Attendee count

Join Event button (each user can join once)

🔍 Search and Filter
Search by event title

Filter by:

Today’s date

Current week

Last week

Current month

Last month

➕ Add Event Page (Private Route)
Form with the following fields:

Event title

Creator’s name

Date and time

Location

Description

Attendee count (default 0)

After submission, the event is saved in the database and listed on the Events page.

📁 My Events Page (Private Route)
Shows all events created by the logged-in user.

Each event card includes:

Event information (same as Events page)

Update button (opens modal or navigates to update page)

Delete button (with confirmation prompt before deletion)

⚙️ Tech Stack
Layer	Technology
Frontend	React.js, Tailwind CSS
Backend	Node.js, Express.js
Database	MongoDB
Auth Logic	Custom authentication using JWT/Cookies (if implemented)

✅ Key Highlights
Fully private routes and role-based visibility of content.

No third-party packages for authentication — everything is built from scratch.

Smart filtering and searching to improve user experience.

Clean and modern UI optimized for both desktop and mobile devices.

Modular and maintainable project structure.

🚧 Future Improvements
Add RSVP list with attendee details

Role-based access (e.g., Admin, User)

Email notifications and reminders

Image uploads for events

Pagination or infinite scroll for events



