# RiddleAi

<<<<<<< HEAD
RiddleAi is a beginner-friendly full-stack learning project where students build an AI-powered riddle app from an empty starter structure.

The goal of this project is not to give students a finished app.  
The goal is to give them a clean project tree where they can learn how a real React + Python + Supabase app is organized and then fill in each file themselves.

---

## Project Idea

RiddleAi will eventually let users:

- Get AI-generated riddles
- Submit answers
- Check whether their answers are correct
- Choose riddle difficulty
- Choose riddle categories
- Save user preferences
- Track solved, failed, and skipped riddles
- Avoid seeing the same riddles repeatedly
- View progress over time

---

## Tech Stack

### Frontend
=======
Riddle AI is a beginner-friendly full-stack learning project for a student app that generates riddles, checks answers, remembers progress, and later saves user history with Supabase.

## Tech Stack

- Frontend: React + Vite
- Backend: Python + FastAPI
- Database/Auth: Supabase
- AI provider later: OpenAI or a similar API
>>>>>>> b2a1532 (easy to follow comments)

- React
- Vite
- JavaScript / JSX
- CSS

### Backend

- Python
- FastAPI

<<<<<<< HEAD
### Database and Auth
=======
## How This Starter Works

Most starter source files are intentionally comment-only. They are guided empty files, not finished app code.

Each important file explains:

- what the file is for
- what to write first
- what data should enter and leave
- which files it connects to
- what mistakes to avoid
- a small beginner checklist

## Project Structure
>>>>>>> b2a1532 (easy to follow comments)

- Supabase
- PostgreSQL through Supabase
- Supabase Auth later

<<<<<<< HEAD
### AI

- OpenAI or another AI provider later

---

## App Architecture
=======
## Best First Files To Open

1. `docs/student-build-order.md`
2. `frontend/my-react-app/src/pages/PlayPage.jsx`
3. `frontend/my-react-app/src/components/riddles/RiddleCard.jsx`
4. `frontend/my-react-app/src/hooks/useRiddle.js`
5. `backend/app/main.py`
>>>>>>> b2a1532 (easy to follow comments)

The planned architecture is:

<<<<<<< HEAD
```txt
React frontend
    ↓
FastAPI backend
    ↓
Supabase database/auth
    ↓
AI provider
=======
Real `.env` files should stay private. The frontend may use public values like `VITE_SUPABASE_ANON_KEY` later, but `SUPABASE_SERVICE_ROLE_KEY` and `AI_API_KEY` must only be used by the backend.

## What Is Not Built Yet

No real React UI, FastAPI routes, Supabase queries, AI calls, SQL migrations, or authentication logic have been implemented yet.
>>>>>>> b2a1532 (easy to follow comments)
