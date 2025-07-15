# replit.md

## Overview

This is a full-stack web application featuring a personal portfolio website built with React.js frontend and Express.js backend. The application uses a modern tech stack with TypeScript, Tailwind CSS with shadcn/ui components, and PostgreSQL with Drizzle ORM for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React.js with TypeScript
- **Build Tool**: Vite for development and production builds
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **Styling**: CSS-in-JS approach with Tailwind utility classes and CSS custom properties

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **API Pattern**: RESTful API structure with `/api` prefix
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)

### Development Setup
- **Monorepo Structure**: Client and server code in separate directories
- **Development Server**: Vite dev server with Express backend integration
- **Hot Module Replacement**: Enabled for React components
- **TypeScript**: Strict mode enabled with path aliases

## Key Components

### Client Structure
- **Pages**: Home, Education, Experience, Skills, Projects, Contact, Resume
- **Layout**: Responsive design with left sidebar navigation that collapses to hamburger menu on mobile
- **Components**: Reusable UI components using shadcn/ui library
- **Styling**: Professional portfolio design with smooth animations and hover effects
- **Resume Page**: Dedicated page for viewing resume with embedded PDF viewer and download options

### Server Structure
- **Routes**: Centralized route registration in `server/routes.ts`
- **Storage**: Abstract storage interface with in-memory implementation
- **Middleware**: Request logging, JSON parsing, error handling
- **Static Serving**: Serves built React app in production

### Database Schema
- **Users Table**: Basic user management with username/password
- **ORM**: Drizzle ORM with Zod validation schemas
- **Migrations**: Database migrations stored in `/migrations` directory

## Data Flow

### Client-Server Communication
1. React app makes API calls using TanStack React Query
2. Custom query client handles HTTP requests with error handling
3. Express server processes requests and responds with JSON
4. Frontend updates UI based on server responses

### Database Operations
1. Server uses Drizzle ORM for database operations
2. Abstract storage interface allows for different implementations
3. Current implementation uses in-memory storage for development
4. Production ready for PostgreSQL with connection pooling

### Static Asset Serving
1. Vite builds React app to `dist/public` directory
2. Express serves static files in production
3. Development uses Vite dev server with proxy

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Query
- **UI Library**: Radix UI primitives with shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Forms**: React Hook Form with Zod resolvers
- **Icons**: Lucide React icons
- **Date Handling**: date-fns library

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Session Management**: connect-pg-simple for PostgreSQL session store
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Build Tools**: Vite, esbuild, TypeScript compiler
- **Code Quality**: ESLint configuration (implied by shadcn/ui setup)
- **Database Tools**: Drizzle Kit for migrations and schema management

## Deployment Strategy

### Production Build Process
1. Frontend built with Vite to `dist/public`
2. Backend bundled with esbuild to `dist/index.js`
3. Single deployment artifact with both client and server

### Environment Configuration
- **Database**: Uses `DATABASE_URL` environment variable
- **Development**: NODE_ENV=development for dev features
- **Production**: NODE_ENV=production for optimized builds

### Replit Integration
- **Development Banner**: Replit dev banner for external access
- **Error Overlay**: Runtime error modal in development
- **Cartographer**: Code mapping for Replit environment

### Database Setup
- **Provider**: Configured for Neon Database (serverless PostgreSQL)
- **Connection**: Uses connection string from environment
- **Migrations**: Run via `npm run db:push` command
- **Schema**: Centralized in `shared/schema.ts` for type sharing

The architecture supports both development and production environments with proper error handling, logging, and responsive design patterns suitable for a professional portfolio website.

## Recent Changes (January 2025)

### Sidebar Updates
- **Custom Logo Integration**: Replaced Lucide React icons with custom SVG logos for LinkedIn and GitHub
- **Clean Icon Design**: Removed button backgrounds and borders, using hover scale animations for better UX
- **Resume Navigation**: Changed "Download Resume" to "View Resume" with navigation to dedicated resume page
- **File Structure**: Created `/public/linkedin-logo.svg` and `/public/github-logo.svg` for custom branding

### Resume Page Implementation
- **New Route**: Added `/resume` route with dedicated Resume page component
- **PDF Viewer**: Implemented embedded PDF viewer using iframe for resume display
- **Download Options**: Multiple download and viewing options including direct PDF download
- **Responsive Design**: Mobile-friendly layout with fallback options for PDF viewing
- **File Management**: Resume stored in `/public/resume.pdf` for easy access and updates