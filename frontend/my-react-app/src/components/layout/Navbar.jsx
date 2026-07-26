import { apiRequest } from './backendApi';

// =========================================================
// Purpose
// =========================================================
// This file holds frontend API functions for user data.
// That includes preferences, progress, and auth-ready user actions.
//
// =========================================================
// What was built
// =========================================================
// Step 1: Added fetchUserPreferences to load student preference settings.
// Step 2: Added saveUserPreferences to push updated difficulty/category picks.
// Step 3: Added fetchUserProgress to fetch stats for the dashboard.
// Step 4: Included lightweight auth helpers (loginUser, registerUser, getCurrentUser).
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
// [x] Are preference requests grouped here?
// [x] Are progress requests grouped here?
// [x] Is private backend logic kept on the backend?

/**
 * Step 1: Retrieve saved preference settings for the active user.
 */
export async function fetchUserPreferences() {
  return await apiRequest('/api/user/preferences', {
    method: 'GET',
  });
}

/**
 * Step 2: Update and save student preferences (difficulty, favorite category, etc.).
 * @param {Object} preferences - Updated preference fields
 */
export async function saveUserPreferences(preferences) {
  return await apiRequest('/api/user/preferences', {
    method: 'PUT',
    body: preferences,
  });
}

/**
 * Step 3: Load progress metrics, solved counts, and streak stats for DashboardPage.
 */
export async function fetchUserProgress() {
  return await apiRequest('/api/user/progress', {
    method: 'GET',
  });
}

/**
 * Step 4: Login user with credentials and store session authorization token.
 * @param {Object} credentials - Email/username and password
 */
export async function loginUser(credentials) {
  const data = await apiRequest('/api/auth/login', {
    method: 'POST',
    body: credentials,
  });

  if (data?.token) {
    localStorage.setItem('authToken', data.token);
  }

  return data;
}

/**
 * Step 4: Register a new student account.
 * @param {Object} userData - Registration fields
 */
export async function registerUser(userData) {
  return await apiRequest('/api/auth/register', {
    method: 'POST',
    body: userData,
  });
}

/**
 * Step 4: Fetch current authenticated user session details.
 */
export async function getCurrentUser() {
  return await apiRequest('/api/user/me', {
    method: 'GET',
  });
}