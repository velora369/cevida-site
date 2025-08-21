# CEVIDA Diagnósticos - Landing Page

## Overview

This is a modern, professional landing page for CEVIDA Diagnósticos, a medical imaging clinic in Santarém-PA, Brazil. The project is built using React with TypeScript for the frontend and Express.js for the backend, following a full-stack monorepo architecture. The website features a clean, classic design with a red and white color scheme, optimized for professional healthcare presentation and patient appointment scheduling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming
- **UI Components**: Radix UI components wrapped in a shadcn/ui design system for accessibility and consistency
- **State Management**: TanStack Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Structure**: Modular section-based components (Header, Hero, About, Services, Testimonials, Contact, Footer)

### Backend Architecture
- **Framework**: Express.js with TypeScript for API development
- **Development Server**: Custom Vite integration for seamless full-stack development
- **Data Storage**: In-memory storage implementation with interface-based architecture for easy database integration
- **Session Management**: Prepared for connect-pg-simple for PostgreSQL session storage
- **Error Handling**: Centralized error handling middleware with structured responses

### Database Layer
- **ORM**: Drizzle ORM for type-safe database interactions
- **Database**: PostgreSQL with Neon serverless hosting
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Type Generation**: Automated TypeScript types from database schema using drizzle-zod

### Design System
- **Theme**: Custom medical/clinic theme with primary red (#ff283f) and neutral grays
- **Typography**: Inter font family for modern, readable text
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support

### Development Workflow
- **Type Safety**: Comprehensive TypeScript configuration across frontend, backend, and shared types
- **Hot Reloading**: Vite development server with HMR for rapid iteration
- **Code Organization**: Monorepo structure with shared schema and clear separation of concerns
- **Path Aliases**: Configured import aliases for clean import statements

## External Dependencies

### Core Framework Dependencies
- **@tanstack/react-query**: Server state management and caching
- **express**: Backend web framework
- **react**: Frontend UI library
- **wouter**: Lightweight routing for React

### Database and ORM
- **drizzle-orm**: Type-safe SQL ORM
- **drizzle-kit**: Database migration and schema management tool
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **connect-pg-simple**: PostgreSQL session store for Express

### UI and Styling
- **tailwindcss**: Utility-first CSS framework
- **@radix-ui/***: Accessible UI component primitives
- **class-variance-authority**: Type-safe variant API for component styling
- **lucide-react**: Icon library

### Development Tools
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **@vitejs/plugin-react**: Vite plugin for React support
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay

### Form Handling and Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Schema validation library

### Medical Clinic Specific Features
- **WhatsApp Integration**: Direct appointment scheduling via WhatsApp API
- **Google-style Testimonials**: Realistic patient review display
- **Professional Medical Imagery**: External image hosting via WordPress CDN
- **Responsive Contact Forms**: Multi-device appointment request handling

## Recent Changes

### Bug Fixes (August 21, 2025)
- Fixed syntax error in FaqSection.tsx: Corrected unterminated string constant in FAQ answer about accepted health insurance plans. The multi-line string was properly formatted to a single line to resolve the compilation error.