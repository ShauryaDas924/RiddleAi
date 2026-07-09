# Project Plan

Riddle AI is a student learning app where users practice riddles, submit answers, receive feedback, and track progress.

## Architecture

React frontend -> FastAPI backend -> Supabase database/auth -> AI provider

The backend should be the main brain of the app.

## First Useful Version

1. Show one riddle.
2. Let the student submit one answer.
3. Show feedback.
4. Save progress later.
5. Avoid repeated riddles later.

## Avoid

- Do not build auth first.
- Do not build a complex dashboard first.
- Do not call the AI provider from the frontend.
