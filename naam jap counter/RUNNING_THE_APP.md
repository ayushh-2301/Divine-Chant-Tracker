# Running the Divine Chant Tracker Application

## Prerequisites

Before running the application, ensure you have the following installed:
- Node.js (version 18 or higher)
- npm (comes with Node.js) or yarn

## Installation Steps

### 1. Install Dependencies

Due to the PowerShell execution policy issues we encountered earlier, you may need to bypass the policy to install dependencies:

```bash
# If using npm
npm install

# If using yarn
yarn install
```

If you encounter execution policy errors on Windows, you can temporarily bypass them by running PowerShell as Administrator and executing:
```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope CurrentUser
```

### 2. Environment Configuration

Create a `.env.local` file in the root directory with the following variables:

```env
# Database Configuration (using Supabase or Neon.tech)
DATABASE_URL=your_postgresql_connection_string_here

# Authentication
JWT_SECRET=your_secret_key_here

# Supabase Configuration (if using Supabase)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Application Settings
NEXT_PUBLIC_APP_NAME=Divine Chant Tracker
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Run Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

The application will be available at http://localhost:3000

### 4. Build for Production

```bash
# Using npm
npm run build

# Using yarn
yarn build
```

### 5. Run Production Server

```bash
# Using npm
npm start

# Using yarn
yarn start
```

## Application Structure

Once running, you can access the following pages:

1. **Home Page** (`/`) - Main dashboard with recitation counters
2. **Reports** (`/reports`) - Analytics and charts
3. **Goals** (`/goals`) - Set and track daily goals
4. **Settings** (`/settings`) - User preferences and account settings

## Voice Recognition Setup

To use the voice recognition feature:

1. Ensure you're using a supported browser (Chrome or Edge recommended)
2. Allow microphone access when prompted
3. Click the "Start Reciting" button
4. Speak the names of deities clearly (Ram, Krishna, Shiva, etc.)

## Database Setup

For a complete working application, you'll need to set up a PostgreSQL database:

### Using Supabase:
1. Create an account at https://supabase.com
2. Create a new project
3. Get your database connection string and API keys
4. Update your `.env.local` file with these values

### Using Neon.tech:
1. Create an account at https://neon.tech
2. Create a new PostgreSQL database
3. Get your connection string
4. Update your `.env.local` file

## Troubleshooting

### Common Issues

1. **Dependency Installation Failures**
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and package-lock.json, then reinstall
   - Use a different terminal (Command Prompt instead of PowerShell)

2. **Voice Recognition Not Working**
   - Ensure you're using HTTPS in production (required by Web Speech API)
   - Check browser compatibility (Chrome/Edge work best)
   - Verify microphone permissions

3. **Database Connection Errors**
   - Double-check your DATABASE_URL format
   - Ensure your database allows connections from your IP
   - Verify credentials are correct

4. **TypeScript Errors**
   - Ensure all dependencies are properly installed
   - Check tsconfig.json configuration
   - Restart the development server

### Browser Compatibility

- **Chrome**: Full support
- **Edge**: Full support
- **Firefox**: Limited voice recognition support
- **Safari**: Limited voice recognition support

## Development Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run tests (when implemented)
npm test
```

## Next Steps

1. Implement the database integration using Prisma
2. Add authentication with Firebase or Auth0
3. Implement Chart.js for data visualization
4. Add Framer Motion for animations
5. Deploy to Vercel
6. Create mobile application

## Support

For issues with running the application:
1. Check the console for error messages
2. Verify all environment variables are set
3. Ensure Node.js and npm versions are compatible
4. Consult the DEVELOPMENT.md and DEPLOYMENT.md documentation