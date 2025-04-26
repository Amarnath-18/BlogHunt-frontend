# BlogHunt Frontend

The frontend application for BlogHunt, a modern blog platform built with React and Vite.

## Tech Stack

- React 19.0.0 with Vite
- Redux Toolkit for state management
- React Router v7
- Tailwind CSS
- shadcn/ui components
- Axios for API calls

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:5000/api
```

3. Start development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
client/
├── src/
│   ├── components/     # React components
│   ├── lib/           # Utility functions and configurations
│   ├── redux/         # Redux store and slices
│   ├── hooks/         # Custom React hooks
│   └── App.jsx        # Main application component
├── public/            # Static assets
└── index.html         # HTML entry point
```

## Features

- User authentication (login/register)
- Blog management (create, read, update, delete)
- Image upload support
- Rich text editing
- Responsive design
- Protected routes
- Like/Unlike functionality
- Comment system
- Category-based filtering

## Environment Variables

- `VITE_API_URL` - Backend API URL

## Build and Deployment

1. Build the application:
```bash
npm run build
```

2. Preview the build:
```bash
npm run preview
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request