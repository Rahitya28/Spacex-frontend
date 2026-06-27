# SpaceX Mission Management System — Frontend

A professional SpaceX-themed React dashboard for browsing and managing mission data from the deployed Node.js backend.

## Tech Stack

- React (JavaScript)
- Vite
- Axios
- React Router DOM

## Project Structure

```text
spacex-frontend/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── MissionCard.jsx
│   │   ├── SearchBar.jsx
│   │   └── Filter.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── MissionDetails.jsx
│   │   └── About.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

## Installation

```bash
cd spacex-frontend
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Production Build

```bash
npm run build
npm run preview
```

## API Integration

Base URL: `https://spacex-backend-g576.onrender.com/api/v1`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/get/missions` | Fetch all missions |
| GET | `/get/missions/:id` | Fetch mission by ID |

## Features

- Mission dashboard with responsive card grid
- Search by mission name
- Filter by status (All, Scheduled, Success, Failed)
- Sort by launch date (newest/oldest)
- Mission details page
- Loading and error states
- SpaceX-inspired dark theme with hover animations

## Deploy to Vercel

1. Push the `spacex-frontend` folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Click **Add New Project** → import your repository.
4. Set **Root Directory** to `spacex-frontend` (if the repo contains both frontend and backend).
5. Framework Preset: **Vite**
6. Build Command: `npm run build`
7. Output Directory: `dist`
8. Click **Deploy**.

The included `vercel.json` handles client-side routing for React Router.

## Deploy to Render (Static Site)

1. Push the project to GitHub.
2. Go to [render.com](https://render.com) → **New** → **Static Site**.
3. Connect your repository.
4. Configure:
   - **Root Directory**: `spacex-frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
5. Add a **Rewrite Rule**:
   - Source: `/*`
   - Destination: `/index.html`
   - Action: Rewrite
6. Click **Create Static Site**.

## Environment Variables

No environment variables are required. The API base URL is configured in `src/services/api.js`.

To use a different backend URL, update `API_BASE_URL` in that file.

## Author

Rahitya28 — SpaceX Mission Management System
