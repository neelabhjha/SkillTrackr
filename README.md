SkillTrackr

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://skilltrackr.vercel.app)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org)


A modern web application designed to help users track their learning progress across different skills. SkillTrackr allows you to organize your learning journey by managing skills, creating tasks, and discovering relevant tutorial resources.


✨ Features

Skill Management - Add, edit, delete, and track progress for different skills
Task Organization - Create and manage learning tasks for each skill
YouTube Resource Integration - Find tutorial videos related to your skills
Responsive Design - Fully responsive UI that works on mobile, tablet, and desktop
Data Persistence - Your progress is saved locally between sessions
Modern UI - Clean, intuitive interface with smooth animations

🛠️ Technologies Used
Frontend

React (v18.3.1) - JavaScript library for building the user interface
Vite - Build tool and development server
Tailwind CSS - Utility-first CSS framework for styling
ShadCN UI - Component library built on top of Tailwind for consistent design


State Management

React Context API - For managing global state across the application
localStorage - For persisting data between sessions

📁 Project Structure
src/
├── components/
│   ├── Header.jsx           # Main navigation header
│   ├── SkillCard.jsx        # Card component displaying skill details
│   ├── AddSkillForm.jsx     # Form for adding new skills
│   ├── TaskList.jsx         # List of tasks for a skill
│   ├── AddTaskForm.jsx      # Form for adding new tasks
│   └── YouTubeResources.jsx # Component for displaying tutorial resources
├── context/
│   └── SkillContext.jsx     # Global state management for skills and tasks
├── pages/
│   ├── Index.jsx            # Main dashboard showing skills
│   └── NotFound.jsx         # 404 page
└── App.jsx                  # Root component

🚀 Getting Started
Prerequisites

Node.js (v16 or higher)
npm or yarn

Installation

Clone the repository

bashgit clone <repository-url>
cd skilltrackr

Install dependencies

bashnpm install

Start the development server

bashnpm run dev


Build for Production
bashnpm run build

💻 Usage

Add a Skill - Click the "Add Skill" button to create a new skill you want to learn
Track Progress - Update your progress level as you advance in your learning
Create Tasks - Break down your learning into manageable tasks for each skill
Find Resources - Use the YouTube integration to discover relevant tutorial videos
Monitor Progress - View your overall learning progress on the dashboard

🏗️ Architecture

State Management
The application uses React Context API (SkillContext) to manage global state, providing:
Centralized state management for skills and tasks
Functions for CRUD operations on skills and tasks
Loading and error state management

Data Persistence

Uses localStorage to persist data between sessions
Automatically saves changes when skills or tasks are modified
Initializes with default skills on first visit

Component Design

Component Composition - Small, focused components composed together
Optimized Rendering - Minimizes unnecessary re-renders using proper React patterns
Responsive Design - Tailwind's responsive classes ensure compatibility across devices

🎨 Styling
The project uses a modern design approach with:

Tailwind CSS for utility-first styling
Custom theme colors - skill-blue, skill-purple, and skill-pink
Smooth animations and hover effects
Mobile-first responsive design

🔧 Development
Key Technical Aspects

React Hooks - Extensive use of useState, useEffect, and useContext
Conditional Rendering - Components adapt based on their state
Error Handling - Comprehensive error handling with user feedback

Available Scripts

npm run dev - Start development server
npm run build - Build for production
npm run preview - Preview production build locally


🐛 Issues
If you encounter any issues or have suggestions for improvements, please open an issue on GitHub.

📝 Future Enhancements

Backend integration for data persistence
User authentication and profiles
Skill sharing and community features
Advanced progress analytics
Mobile app development
Integration with more learning platforms


Built with ❤️ using React and modern web technologies