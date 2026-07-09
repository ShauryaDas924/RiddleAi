# RiddleAi

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

- React
- Vite
- JavaScript / JSX
- CSS

### Backend

- Python
- FastAPI

### Database and Auth

- Supabase
- PostgreSQL through Supabase
- Supabase Auth later

### AI

- OpenAI or another AI provider later

---

## App Architecture

The planned architecture is:

```txt
React frontend
    ↓
FastAPI backend
    ↓
Supabase database/auth
    ↓
AI provider
