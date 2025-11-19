# Freelance Marketplace 🌟

A full-stack web application where users can explore, add, update, and delete jobs in a digital platform. Authenticated users can manage job data while others can accept available tasks.

## 🚀 Live Demo

- **Live Site:** https://chipper-squirrel-d93695.netlify.app/
- **Client Repo:** [https://github.com/your-username/freelance-marketplace-client](https://github.com/your-username/freelance-marketplace-client)
- **Server Repo:** [https://github.com/your-username/freelance-marketplace-server](https://github.com/your-username/freelance-marketplace-server)

## ✨ Key Features

- **🔐 Firebase Authentication** - Secure login/registration with Google sign-in
- **💼 Job Management** - Complete CRUD operations for job postings
- **🤝 Task Acceptance** - Users can accept jobs posted by others
- **📱 Fully Responsive** - Optimized for mobile, tablet, and desktop
- **🎨 Modern UI** - Clean design with dark/light theme toggle
- **⚡ Real-time Updates** - Instant UI updates with TanStack Query
- **🔒 Protected Routes** - Secure access to authenticated pages

## 🛠️ Tech Stack

### Frontend
- **React** - UI framework
- **Tailwind CSS** - Styling
- **TanStack Query** - Data fetching
- **Axios** - HTTP requests
- **React Hot Toast** - Notifications
- **Framer Motion** - Animations

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Firebase Admin** - Authentication
- **CORS** - Cross-origin requests

### Deployment
- **Netlify** - Frontend hosting
- **Vercel** - Backend hosting
- **MongoDB Atlas** - Cloud database


## 🎯 Pages & Routes

### Public Routes
- `/` - Homepage with banner and featured jobs
- `/allJobs` - Browse all available jobs
- `/login` - User authentication
- `/register` - User registration

### Protected Routes
- `/addJob` - Create new job posting
- `/myAddedJobs` - Manage posted jobs
- `/updateJob/:id` - Edit job details
- `/my-accepted-tasks` - View accepted tasks
- `/allJobs/:id` - Job details page

## 🔐 Authentication Features

- Email/Password registration with validation
- Google Sign-in integration
- Protected route implementation
- User session persistence
- Profile photo and display name

## 💼 Job Management

### Job Data Structure
```javascript
{
  "title": "Job Title",
  "postedBy": "User Display Name",
  "category": "Web Development",
  "summary": "Job description",
  "coverImage": "Image URL",
  "userEmail": "user@example.com",
  "postedDate": "2024-01-01T00:00:00.000Z",
}
