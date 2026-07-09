# Riddle AI Backend

This folder is the Python FastAPI backend for the Riddle AI learning app.

## Purpose

The backend is the brain of the app. It will later handle riddle generation, answer checking, preferences, riddle history, Supabase access, and progress saving.

## How To Use These Files

Open files inside `app/` and read their teaching comments. They explain what each backend file should eventually contain.

## Main Folders

- `app/routes`: future FastAPI route files.
- `app/services`: future app logic for riddles, answers, users, history, and Supabase.
- `app/schemas`: future request and response shapes.
- `app/prompts`: AI prompt planning files.
- `app/data`: small valid JSON sample data.
- `app/tests`: backend tests to add later.

## Avoid

- Do not put all backend logic in `main.py`.
- Do not call the AI provider directly from route files when a service file exists.
- Do not put Supabase service role keys or AI API keys in source code.

## Security

`SUPABASE_SERVICE_ROLE_KEY` and `AI_API_KEY` belong only in backend environment files. Never place them in the frontend.
