// =========================================================
// Purpose
// =========================================================
// This file will eventually be the main riddle-playing page.
// It should coordinate riddle display, answer input, and result feedback.
//
// =========================================================
// What to build later
// =========================================================
// Step 1: Use useRiddle.js to load and manage the current riddle.
// Step 2: Show RiddleCard for the current riddle.
// Step 3: Show AnswerInput for student answers.
// Step 4: Show RiddleResult after the backend checks an answer.
// Step 5: Add next-riddle, skip, difficulty, and category controls later.
//
// =========================================================
// Data in and data out
// =========================================================
// Data in: Student answer, selected difficulty, selected category.
// Data out: Riddle request, answer-check request, and visible feedback.
//
// =========================================================
// Connects to
// =========================================================
// - src/hooks/useRiddle.js
// - src/components/riddles/*
// - src/api/riddleApi.js
// - backend/app/routes/riddle_routes.py
//
// =========================================================
// Avoid
// =========================================================
// Do not put AI generation logic in this page.
// Do not let this page grow so large that components become pointless.
//
// =========================================================
// Beginner checklist
// =========================================================
// [ ] Does PlayPage coordinate the riddle flow?
// [ ] Are display pieces split into components?
// [ ] Are backend calls hidden behind hooks or API files?
