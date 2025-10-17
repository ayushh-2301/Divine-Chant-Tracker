# Deployment Guide for Divine Chant Tracker

## Prerequisites

1. GitHub account
2. Vercel account
3. PostgreSQL database (Supabase or Neon.tech)
4. Domain name (optional)

## Step-by-Step Deployment

### 1. Prepare Your Code

1. Ensure all environment variables are properly configured in `.env.local`
2. Test the application locally with `npm run dev`
3. Commit all changes to your Git repository
4. Push to your GitHub repository

### 2. Set Up Vercel

1. Go to [vercel.com](https://vercel.com) and sign in/up
2. Click "New Project"
3. Import your GitHub repository
4. Configure project settings:
   - Framework: Next.js
   - Root directory: Leave as is
   - Build command: `npm run build`
   - Output directory: `.next`

### 3. Configure Environment Variables

In the Vercel project settings, add the following environment variables:

```
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Database Setup

#### Option A: Supabase
1. Create a Supabase account at [supabase.com](https://supabase.com)
2. Create a new project
3. Get your database connection string and API keys
4. Set up the required tables using the schema in DEVELOPMENT.md

#### Option B: Neon.tech
1. Create a Neon.tech account at [neon.tech](https://neon.tech)
2. Create a new PostgreSQL database
3. Get your connection string
4. Set up the required tables using the schema in DEVELOPMENT.md

### 5. Deploy

1. Click "Deploy" in Vercel
2. Wait for the build to complete
3. Visit your deployed application

### 6. Custom Domain (Optional)

1. In Vercel project settings, go to "Domains"
2. Add your custom domain
3. Follow the DNS configuration instructions
4. Wait for SSL certificate to be provisioned

## Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| DATABASE_URL | PostgreSQL connection string | postgresql://user:pass@host:port/db |
| JWT_SECRET | Secret key for JWT tokens | your-super-secret-jwt-key |
| NEXT_PUBLIC_SUPABASE_URL | Supabase project URL | https://your-project.supabase.co |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | Supabase anonymous key | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| NEXT_PUBLIC_APP_NAME | Application name | Divine Chant Tracker |
| NEXT_PUBLIC_APP_URL | Application URL | https://your-app.vercel.app |

## Monitoring and Analytics

### Vercel Analytics
Vercel provides built-in analytics for your deployment:
- Performance metrics
- Visitor statistics
- Error tracking

### Database Monitoring
Monitor your PostgreSQL database:
- Connection usage
- Query performance
- Storage usage

## Troubleshooting

### Common Deployment Issues

1. **Build Failures**
   - Check build logs in Vercel
   - Ensure all dependencies are in package.json
   - Verify TypeScript compilation

2. **Environment Variables Not Found**
   - Ensure variables are added in Vercel project settings
   - Check variable names match exactly
   - Restart deployment after adding variables

3. **Database Connection Errors**
   - Verify DATABASE_URL format
   - Check database credentials
   - Ensure database allows connections from Vercel

4. **Voice Recognition Not Working**
   - Ensure HTTPS is used (required for Web Speech API)
   - Check browser compatibility
   - Verify microphone permissions

### Rollback Process

1. In Vercel, go to project deployments
2. Find the previous working deployment
3. Click "Rollback" to revert to that version

## Performance Optimization

### Caching
- Use Vercel's built-in caching
- Implement Redis for session caching (optional)
- Cache database queries where appropriate

### Image Optimization
- Use Next.js Image component
- Optimize images for web
- Use appropriate image formats

### Code Splitting
- Leverage Next.js dynamic imports
- Split large components into smaller chunks
- Use lazy loading for non-critical resources

## Security Considerations

### Authentication
- Use HTTPS in production
- Implement proper JWT token expiration
- Securely store secrets in environment variables

### Data Protection
- Encrypt sensitive user data
- Implement proper database access controls
- Regularly backup database

### API Security
- Rate limit API endpoints
- Validate all user inputs
- Implement proper error handling

## Maintenance

### Regular Tasks
1. Monitor application logs
2. Update dependencies regularly
3. Review and optimize database queries
4. Check SSL certificate expiration

### Updates
1. Test changes locally
2. Commit to version control
3. Deploy to staging environment (if available)
4. Deploy to production after testing

## Support

For issues with deployment:
1. Check Vercel documentation
2. Review project logs
3. Contact Vercel support for platform issues
4. Consult PostgreSQL provider documentation for database issues