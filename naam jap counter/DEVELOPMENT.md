# Divine Chant Tracker - Development Guide

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── api/            # API routes
│   ├── reports/        # Reports page
│   ├── goals/          # Goals page
│   ├── settings/       # Settings page
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   └── ui/            # UI components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and services
├── styles/            # Global styles
└── types/             # TypeScript types
```

## Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library (to be implemented)

### Backend
- **Next.js API Routes** - Serverless functions
- **PostgreSQL** - Database (via Supabase/Neon.tech)
- **Prisma** - ORM (to be implemented)

### Authentication
- **JWT** - Token-based authentication
- **OAuth** - Google authentication (to be implemented)

### Voice Recognition
- **Web Speech API** - Browser-native speech recognition

### Data Visualization
- **Chart.js** - Charting library (to be implemented)

## Setup Instructions

### Prerequisites
- Node.js 18+
- npm or yarn
- PostgreSQL database (Supabase/Neon.tech)

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (see `.env.example`)
4. Run the development server:
   ```bash
   npm run dev
   ```

### Environment Variables
Create a `.env.local` file with the following variables:
```
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Development Workflow

### Adding New Features
1. Create a new branch for your feature
2. Implement the feature following the project structure
3. Write tests if applicable
4. Update documentation
5. Submit a pull request

### Code Style
- Follow TypeScript best practices
- Use functional components with hooks
- Maintain consistent naming conventions
- Write clear, concise comments

### Component Development
1. Create components in the appropriate directory
2. Use TypeScript interfaces for props
3. Implement responsive design with Tailwind
4. Test components in isolation

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Recitations Table
```sql
CREATE TABLE recitations (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  god_name VARCHAR(100) NOT NULL,
  count INTEGER NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE
);
```

### Goals Table
```sql
CREATE TABLE goals (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  god_name VARCHAR(100) NOT NULL,
  daily_goal INTEGER NOT NULL,
  streak INTEGER NOT NULL DEFAULT 0,
  last_active DATE
);
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration
- `POST /api/auth/logout` - User logout

### Recitations
- `GET /api/recitations` - Get user recitations
- `POST /api/recitations` - Create new recitation record

### Goals
- `GET /api/goals` - Get user goals
- `POST /api/goals` - Create/update user goal

## Deployment

### Vercel Deployment
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Database Setup
1. Create PostgreSQL database (Supabase/Neon.tech)
2. Run database migrations
3. Set `DATABASE_URL` environment variable

## Testing

### Unit Tests
- Use Jest for unit testing
- Place test files next to implementation files with `.test.ts` extension

### Integration Tests
- Use Cypress for end-to-end testing
- Test critical user flows

### Voice Recognition Testing
- Test on Chrome and Edge browsers
- Verify microphone permissions
- Test various pronunciation variations

## Troubleshooting

### Common Issues

1. **Voice Recognition Not Working**
   - Ensure browser support (Chrome/Edge recommended)
   - Check microphone permissions
   - Verify HTTPS is used in production

2. **Database Connection Errors**
   - Verify `DATABASE_URL` environment variable
   - Check database credentials
   - Ensure database is accessible

3. **Authentication Issues**
   - Verify `JWT_SECRET` is set
   - Check token expiration settings
   - Validate user credentials

### Browser Compatibility
- **Chrome**: Full support
- **Edge**: Full support
- **Firefox**: Limited voice recognition support
- **Safari**: Limited voice recognition support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License
This project is licensed under the MIT License.