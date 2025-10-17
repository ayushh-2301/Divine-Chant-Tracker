# Divine Chant Tracker 🕉️

A personalized dashboard for tracking recitations of divine names.

## Project Overview

The Divine Chant Tracker is a professional, spiritual, and user-friendly full-stack web application where users can log in and track how many times they have recited the names of gods like Radha, Ram, Krishna, Shiva, Durga, Hanuman, Lakshmi, Ganesh, Vishnu, Parvati, Saraswati, etc.

The system uses voice recognition to automatically recognize recited god names and update user statistics in real-time.

## Features

### User Authentication
- Sign up / Login using email, Google, or phone number
- Secure credential storage
- Personalized dashboard after login

### Dashboard Overview
- Clean, calm UI with spiritual theme
- Real-time counters for each god name
- Voice recognition controls

### Voice Recognition System
- Web Speech API for voice input
- Detection of divine names
- Real-time counter updates

### Reports & Analytics
- Time-based views (Daily, Weekly, Monthly, Yearly)
- Interactive charts using Chart.js
- Export/download reports (PDF or CSV)

### User Goals & Motivation
- Daily chant goals
- Motivational quotes
- Streak tracking

### Profile & Settings
- Microphone permissions management
- Light/Dark spiritual modes
- Language selection (English/Hindi)

## Tech Stack

### Frontend
- React.js with Next.js 14
- Tailwind CSS for styling
- Chart.js for data visualization
- Framer Motion for animations

### Backend
- Next.js API routes
- PostgreSQL database (Supabase or Neon.tech)
- Prisma ORM
- JWT authentication

### Database
- PostgreSQL tables:
  - `users`: id, name, email, password_hash, created_at
  - `recitations`: id, user_id (FK), god_name, count, date
  - `goals`: id, user_id (FK), god_name, daily_goal, streak, last_active

## Deployment
- Hosted on Vercel
- PostgreSQL via environment variables
- Auto-deployment from GitHub repo

## Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in `.env.local`:
   ```
   DATABASE_URL=your_postgresql_connection_string
   JWT_SECRET=your_jwt_secret
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

1. Push your code to a GitHub repository
2. Sign up/in to Vercel
3. Create a new project and import your GitHub repository
4. Configure the project:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Add environment variables in the Vercel dashboard:
   - `DATABASE_URL`
   - `JWT_SECRET`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Deploy!

## Folder Structure
```
src/
├── app/           # Next.js app directory
├── components/    # React components
├── lib/           # Utility functions
├── styles/        # Global styles
└── types/         # TypeScript types
```

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License.