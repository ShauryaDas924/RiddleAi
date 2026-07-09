# Riddle AI Frontend

This folder is the React + Vite frontend for the Riddle AI learning app.

## Purpose

The frontend should show pages, render reusable components, collect student answers, and call the FastAPI backend. It should not hold secret keys or own the main riddle logic.

## Main Folders

- `src/pages`: full pages such as home, play, settings, dashboard, login, and not found.
- `src/components`: reusable UI pieces such as cards, buttons, riddle displays, and preference forms.
- `src/api`: functions that will call the backend later.
- `src/hooks`: reusable React state logic.
- `src/styles`: shared CSS files.
- `src/utils`: small helper files.
- `src/tests`: frontend tests to add later.

## Security

Only public browser-safe values belong in `VITE_` variables. Backend secrets do not belong in this folder.
