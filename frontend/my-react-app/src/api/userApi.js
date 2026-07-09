// =========================================================
// Purpose
// =========================================================
// This file will eventually hold frontend API functions for user data.
// That includes preferences, progress, and auth-ready user actions.
//
// =========================================================
// What to build later
// =========================================================
// Step 1: Add a function to load user preferences.
// Step 2: Add a function to save difficulty and category preferences.
// Step 3: Add a function to load progress or dashboard stats.
// Step 4: Keep login/signup helpers simple until auth is ready.
//
// =========================================================
// Data in and data out
// =========================================================
// Data in: User id, preference choices, and progress requests.
// Data out: Saved preferences, progress summaries, and user status.
//
// =========================================================
// Connects to
// =========================================================
// - src/hooks/useUserPreferences.js
// - src/pages/SettingsPage.jsx
// - src/pages/DashboardPage.jsx
// - backend/app/routes/user_routes.py
//
// =========================================================
// Avoid
// =========================================================
// Do not store backend-only secrets here.
// Do not talk directly to Supabase service role APIs from the frontend.
//
// =========================================================
// Beginner checklist
// =========================================================
// [ ] Are preference requests grouped here?
// [ ] Are progress requests grouped here?
// [ ] Is private backend logic kept on the backend?
