# Riddle AI Frontend

This folder is the React + Vite frontend for the Riddle AI learning app.

## Purpose

The frontend will eventually show pages, render reusable components, collect student answers, show results, and call the FastAPI backend.

## How To Use These Files

Open the files in `src/` and read their teaching comments. They explain what to build later without giving away finished code.

## Main Folders

- `src/pages`: full pages such as home, play, settings, dashboard, login, and not found.
- `src/components`: reusable UI pieces such as cards, buttons, riddle displays, and preference forms.
- `src/api`: frontend request helpers that will call the backend later.
- `src/hooks`: reusable React state logic.
- `src/styles`: shared CSS files.
- `src/utils`: small helper files.
- `src/tests`: frontend tests to add later.

## Avoid

- Do not put backend secrets in frontend files.
- Do not call the AI provider from the frontend.
- Do not make one page contain every component and every request.

## Security

Only public browser-safe values belong in `VITE_` variables. Backend secrets do not belong in this folder.
