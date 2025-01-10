# [Car Dealer Application]

A modern web application for browsing car models by make and year, built with Next.js 13+, TypeScript, and Tailwind CSS.

## Features

- Filter vehicles by make and model year
- Server-side rendering for optimal performance
- Responsive design with Tailwind CSS
- Beautiful UI components from shadcn/ui
- Type-safe development with TypeScript

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file with the required environment variables
4. Run the development server:
   ```bash
   npm run dev
   ```

## Architecture

The application follows Next.js 13+ app directory structure and best practices:

- `app/page.tsx` - Home page with filter interface
- `app/result/[makeId]/[year]/page.tsx` - Results page showing available models
- `components/ui/*` - Reusable UI components
- Server-side data fetching with proper error handling
- Static path generation for popular makes and years

## API Integration

The application integrates with the NHTSA Vehicle API to fetch:
- Vehicle makes
- Vehicle models by make ID and year

## Development

- ESLint and Prettier configured for code quality
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui for UI components

## Production Build

```bash
npm run build
```

This will create an optimized production build in the `.next` directory.
