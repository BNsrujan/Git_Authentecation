# Frontend

A React TypeScript application with Auth0 authentication and terminal functionality.

## Features

- **Authentication**: Secure user authentication using Auth0
- **User Management**: User profile display with dropdown menu
- **Terminal Interface**: Interactive terminal components
- **Routing**: Client-side routing with React Router
- **Modern Stack**: Built with React 18, TypeScript, and Vite

## Tech Stack

- **Framework**: React 18.3.1
- **Language**: TypeScript
- **Build Tool**: Vite 5.4.1
- **Authentication**: Auth0 React SDK
- **Routing**: React Router DOM 6.26.2
- **Linting**: ESLint with TypeScript support

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Navigate to the Frontend directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Auth0:
   - Update the Auth0 domain and client ID in `src/main.tsx`
   - Set up your Auth0 application with the correct callback URLs

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
Frontend/
├── src/
│   ├── components/
│   │   ├── nav.tsx          # Navigation with Auth0 integration
│   │   ├── cards.tsx        # Card components with terminal interaction
│   │   └── terminal.tsx     # Terminal interface component
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point with Auth0 provider
│   ├── index.css            # Global styles
│   └── vite-env.d.ts        # Vite type definitions
├── package.json             # Dependencies and scripts
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── eslint.config.js         # ESLint configuration
```

## Components

### Nav Component
- Handles user authentication state
- Displays user profile with dropdown menu
- Login/logout functionality

### Cards Component
- Interactive cards that trigger terminal sessions
- Makes API calls to backend terminal endpoint
- Navigation to terminal routes

### Terminal Component
- Displays terminal interface
- Uses URL parameters for terminal identification

## Authentication

The application uses Auth0 for authentication with the following features:
- Social login integration
- User profile management
- Secure token handling
- Automatic redirect handling

## API Integration

The frontend communicates with a backend API running on `http://localhost:3000` for terminal functionality.

## Contributing

1. Follow the existing code style and TypeScript conventions
2. Run linting before committing: `npm run lint`
3. Ensure all components are properly typed
4. Test authentication flows thoroughly

## License

This project is private and not licensed for public use.