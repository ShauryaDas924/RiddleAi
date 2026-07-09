# Riddle AI

Riddle AI is a beginner-friendly learning project for a student app that generates riddles, checks answers, remembers progress, and later saves user history with Supabase.

## Tech Stack

- Frontend: React + Vite
- Backend: Python + FastAPI
- Database/Auth: Supabase
- AI provider: OpenAI or a similar API later

## App Flow

React frontend -> FastAPI backend -> Supabase database/auth -> AI provider

The backend is the brain of the app. The frontend should call the backend for riddle generation, answer checking, preferences, progress, and history.

## Project Structure

- `frontend/my-react-app`: React pages, components, hooks, API helpers, styles, and frontend tests.
- `backend`: FastAPI routes, services, schemas, prompts, sample data, and backend tests.
- `database`: Supabase table planning, future migrations, and seed data.
- `docs`: short planning notes for students.

## How Students Should Use This

Start by opening the TODO-only files and filling them in one small feature at a time. Do not try to build the whole app at once.

Good first files to read:

- `docs/student-build-order.md`
- `frontend/my-react-app/src/pages/PlayPage.jsx`
- `frontend/my-react-app/src/components/riddles/RiddleCard.jsx`
- `backend/app/main.py`
- `backend/app/routes/health_routes.py`

## Security Reminder

Real `.env` files should stay private. The frontend may use public values like `VITE_SUPABASE_ANON_KEY` later, but `SUPABASE_SERVICE_ROLE_KEY` and `AI_API_KEY` must only be used by the backend.
