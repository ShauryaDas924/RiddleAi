// =========================================================
// Purpose
// =========================================================
// This file will eventually hold shared helper code for talking
// to the FastAPI backend.
//
// =========================================================
// What to build later
// =========================================================
// Step 1: Read the backend API URL from a Vite environment variable.
// Step 2: Create one shared request helper for common backend calls.
// Step 3: Add consistent error handling for failed requests.
// Step 4: Let feature-specific files call this helper.
//
// =========================================================
// Data in and data out
// =========================================================
// Data in: Endpoint paths, request options, and user input from pages.
// Data out: Parsed response data from the backend.
//
// =========================================================
// Connects to
// =========================================================
// - src/api/riddleApi.js
// - src/api/userApi.js
// - backend/app/routes/*
//
// =========================================================
// Avoid
// =========================================================
// Do not put Supabase service role keys here.
// Do not put AI API keys here.
// Do not hide feature-specific logic in this shared helper.
//
// =========================================================
// Beginner checklist
// =========================================================
// [ ] Is the backend URL coming from .env?
// [ ] Are errors handled in one predictable way?
// [ ] Are secrets kept out of frontend code?
