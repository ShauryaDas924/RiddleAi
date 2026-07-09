// =========================================================
// Purpose
// =========================================================
// This file will eventually manage user preference state.
// Preferences may include difficulty, categories, and saved settings.
//
// =========================================================
// What to build later
// =========================================================
// Step 1: Store the current preference values.
// Step 2: Load saved preferences from the backend.
// Step 3: Save updated preferences through userApi.js.
// Step 4: Return values and update actions to pages/components.
//
// =========================================================
// Data in and data out
// =========================================================
// Data in: User changes from forms and selectors.
// Data out: Current preferences, loading status, and save function.
//
// =========================================================
// Connects to
// =========================================================
// - src/pages/SettingsPage.jsx
// - src/components/user/PreferenceForm.jsx
// - src/api/userApi.js
//
// =========================================================
// Avoid
// =========================================================
// Do not store private secrets in frontend state.
// Do not duplicate preference logic in many pages.
//
// =========================================================
// Beginner checklist
// =========================================================
// [ ] Can SettingsPage use this hook easily?
// [ ] Is saving handled through userApi.js?
// [ ] Are default preferences clear?
