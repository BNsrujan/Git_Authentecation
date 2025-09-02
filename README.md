# GitHub Authentication with Auth0

This React TypeScript application implements GitHub authentication using Auth0 

## Current Implementation Overview

 app uses:
- **Auth0** for authentication management
- **GitHub** as a social login provider through Auth0
- **React Router** for navigation
- **TypeScript** for type safety

## Prerequisites

- Auth0 account 
- Node.js and npm installed
- GitHub account for social login

## Current Configuration

### Auth0 Settings
- **Domain**: `dev-sdafasdfasdfasdf.us.auth0.com`
- **Client ID**: `dfsajajksdfhsadkjfhsdajkjasfd`
- **Redirect URI**: `window.location.origin` (current domain)

### Dependencies
project uses these key packages:
```json
{
  "@auth0/auth0-react": "^2.2.4",
  "react": "^18.3.1",
  "react-router-dom": "^6.26.2"
}
```

## How to Configure

### 1. Auth0 Dashboard Setup

To replicate this setup or modify it:

1. **Create Auth0 Application**:
   - Go to [Auth0 Dashboard](https://manage.auth0.com/)
   - Create a new Single Page Application
   - Note your Domain and Client ID

2. **Configure GitHub Social Connection**:
   - Go to Authentication → Social
   - Enable GitHub connection
   - Add your GitHub OAuth app credentials
   - Configure scopes (email, profile)

3. **Application Settings**:
   - **Allowed Callback URLs**: `http://localhost:5173, https://yourdomain.com`
   - **Allowed Logout URLs**: `http://localhost:5173, https://yourdomain.com`
   - **Allowed Web Origins**: `http://localhost:5173, https://yourdomain.com`

### 2. Environment Variables

Create a `.env` file for different environments:

```env
# Development
VITE_AUTH0_DOMAIN=dev-asdlkfjwen.us.auth0.com
VITE_AUTH0_CLIENT_ID=fnkasdnewjwif

# Production (replace with your production values)
# VITE_AUTH0_DOMAIN=your-production-domain.auth0.com
# VITE_AUTH0_CLIENT_ID=your-production-client-id
```


## Code Structure

### Authentication Flow

Your implementation provides:

- **Login**: Click "Log In" button → redirects to Auth0 → GitHub OAuth → back to app
- **User Info**: Displays user profile picture, name, email, and ID
- **Logout**: Sign out and return to login state
- **Loading States**: Shows loading indicator during authentication


## Running the Application

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```


## Security Considerations

1. **Environment Variables**: Never commit Auth0 credentials to version control
2. **HTTPS**: Use HTTPS in production for secure token transmission
3. **Domain Validation**: Ensure callback URLs match exactly in Auth0 settings
4. **Token Storage**: Auth0 handles secure token storage automatically

## Troubleshooting

### Common Issues

1. **"Callback URL mismatch"**:
   - Check Auth0 dashboard allowed callback URLs
   - Ensure exact match with your domain

2. **"Access Denied"**:
   - Verify GitHub social connection is enabled
   - Check GitHub OAuth app settings

3. **Loading indefinitely**:
   - Check browser console for errors
   - Verify Auth0 domain and client ID



