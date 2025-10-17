# Setting Environment Variables for Divine Chant Tracker on Vercel

## Overview

Environment variables are crucial for configuring your Divine Chant Tracker application when deploying to Vercel. This guide will walk you through the process of setting up all required environment variables for a successful deployment.

## Required Environment Variables

Your application requires the following environment variables:

1. `DATABASE_URL` - PostgreSQL connection string
2. `JWT_SECRET` - Secret key for JWT token generation
3. `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL (if using Supabase)
4. `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key (if using Supabase)

## Step-by-Step Guide

### Step 1: Prepare Your Database

Before setting environment variables, you need to set up your PostgreSQL database. You can use either Supabase or Neon.tech.

#### Option A: Using Supabase

1. Go to [supabase.com](https://supabase.com) and create an account
2. Create a new project
3. Once the project is ready, navigate to Project Settings > Database
4. Copy your database connection string (Connection Pooling URL)
5. Also copy your Project URL and anon key from Project Settings > API

#### Option B: Using Neon.tech

1. Go to [neon.tech](https://neon.tech) and create an account
2. Create a new PostgreSQL database
3. Copy your connection string from the connection details

### Step 2: Deploy to Vercel (First Deployment)

1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Divine Chant Tracker"
   git remote add origin [your-github-repo-url]
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign in/up
3. Click "New Project"
4. Import your Git repository
5. Configure the project:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. **DO NOT add environment variables yet** - Click "Deploy" to start the first build

### Step 3: Access Project Settings

1. Once the first deployment completes (it may fail due to missing environment variables), go to your project dashboard
2. Click on "Settings" in the top navigation
3. Click on "Environment Variables" in the left sidebar

### Step 4: Add Environment Variables

In the Environment Variables section, add each variable using the "Add" button:

#### Variable 1: DATABASE_URL
- **Key**: `DATABASE_URL`
- **Value**: Your PostgreSQL connection string from Supabase or Neon.tech
- **Environment**: Production (you can also add for Preview and Development if needed)

Example format:
```
postgresql://[USER]:[PASSWORD]@[HOST]:[PORT]/[DATABASE]
```

#### Variable 2: JWT_SECRET
- **Key**: `JWT_SECRET`
- **Value**: A strong secret key for JWT token generation
- **Environment**: Production

To generate a strong secret, you can use:
```bash
# If you have Node.js installed
node -e "console.log(require('crypto').randomBytes(32).toString('hex'));"
```

Or use an online password generator to create a 32-character random string.

#### Variable 3: NEXT_PUBLIC_SUPABASE_URL (if using Supabase)
- **Key**: `NEXT_PUBLIC_SUPABASE_URL`
- **Value**: Your Supabase project URL
- **Environment**: Production

Example format:
```
https://[your-project-id].supabase.co
```

#### Variable 4: NEXT_PUBLIC_SUPABASE_ANON_KEY (if using Supabase)
- **Key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value**: Your Supabase anon key
- **Environment**: Production

### Step 5: Redeploy the Application

After adding all environment variables:

1. Go to the "Deployments" tab in your Vercel project
2. Find the latest deployment and click on the "Redeploy" button (circular arrow icon)
3. In the redeployment dialog, make sure to check "Use existing Build Cache" to speed up the process
4. Click "Redeploy"

### Step 6: Verify Deployment

1. Once the redeployment completes, visit your application URL
2. Check that the application loads without errors
3. Test API endpoints:
   - Visit `[your-domain]/api/health` - should return a JSON success response
   - Visit `[your-domain]/api/recitations` - should return mock data

### Step 7: Set Up Preview Environment Variables (Optional)

For a complete setup, you might want to add the same environment variables for Preview deployments:

1. In the Environment Variables section, for each variable you added:
2. Click the "Edit" button
3. In the "Environment" dropdown, select "Preview" in addition to "Production"
4. Click "Save"

## Environment Variable Best Practices

### 1. Security
- Never commit environment variables to your repository
- Use strong, randomly generated secrets
- Rotate secrets periodically

### 2. Naming Conventions
- Use uppercase letters with underscores
- Prefix public variables with `NEXT_PUBLIC_` (only for non-sensitive data)
- Be consistent with naming across environments

### 3. Variable Management
- Document all environment variables in your `.env.example` file
- Use descriptive names that clearly indicate the variable's purpose
- Group related variables together in the Vercel interface

## Troubleshooting Common Issues

### 1. "Missing Environment Variable" Errors
- Ensure all required variables are added
- Check that variables are assigned to the correct environments
- Redeploy after adding variables

### 2. Database Connection Failures
- Verify the DATABASE_URL format
- Ensure your database allows connections from Vercel IPs
- Check database credentials

### 3. JWT Errors
- Ensure JWT_SECRET is properly set
- Check that the secret is sufficiently long and random

### 4. Supabase Integration Issues
- Verify NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
- Ensure your Supabase project is properly configured

## Example Environment Variable Setup

Here's what your Vercel environment variables should look like:

| Key | Value | Environment |
|-----|-------|-------------|
| DATABASE_URL | postgresql://user:pass@host:port/db | Production |
| JWT_SECRET | 32-character-random-string | Production |
| NEXT_PUBLIC_SUPABASE_URL | https://your-project.supabase.co | Production |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... | Production |

## Local Development

For local development, create a `.env.local` file in your project root with the same variables:

```env
DATABASE_URL=postgresql://user:pass@localhost:5432/divine_chant_tracker
JWT_SECRET=your-local-jwt-secret-key-here
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key-here
```

## Conclusion

By following these steps, you'll have successfully configured all required environment variables for your Divine Chant Tracker application on Vercel. Remember to redeploy your application after adding environment variables to ensure they take effect.

If you encounter any issues during this process, check the Vercel deployment logs for specific error messages, which will help you identify any misconfigurations.