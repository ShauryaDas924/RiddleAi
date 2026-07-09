# Riddle AI Backend

This folder is the Python FastAPI backend for the Riddle AI learning app.

## Purpose

The backend is the brain of the app. It will later handle riddle generation, answer checking, preferences, riddle history, Supabase access, and progress saving.

## Main Folders

- `app/routes`: future FastAPI route files.
- `app/services`: future app logic for riddles, answers, users, history, and Supabase.
- `app/schemas`: future request and response shapes.
- `app/prompts`: AI prompt drafts.
- `app/data`: sample riddle and category data.
- `app/tests`: backend tests to add later.

## Security

`SUPABASE_SERVICE_ROLE_KEY` and `AI_API_KEY` belong only in backend environment files. Never place them in the frontend.
