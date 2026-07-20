import { apiRequest } from './backendApi';

// =========================================================
// Purpose
// =========================================================
// This file holds frontend API functions for riddles.
// Pages and hooks use this file instead of writing request logic directly.
//
// =========================================================
// What was built
// =========================================================
// Step 1: Added fetchRiddle to request a new riddle with query parameters.
// Step 2: Added verifyAnswer to submit user input for backend checking.
// Step 3: Added skipRiddle to notify the backend when a riddle is skipped.
// Step 4: Routed all requests through the shared apiRequest helper in backendApi.js.
//
// =========================================================
// Data in and data out
// =========================================================
// Data in: Difficulty, category, riddle id, and student answer.
// Data out: Riddle data, answer feedback, and status messages.
//
// =========================================================
// Connects to
// =========================================================
// - src/api/backendApi.js
// - src/hooks/useRiddle.js
// - backend/app/routes/riddle_routes.py
//
// =========================================================
// Avoid
// =========================================================
// Do not generate riddles in the frontend.
// Do not check answers in the frontend if the backend is responsible.
//
// =========================================================
// Beginner checklist
// =========================================================
// [x] Are riddle requests kept in this file?
// [x] Does this file call the backend instead of doing backend work?
// [x] Is the data shape easy for PlayPage to use?

/**
 * Step 1: Request a new riddle from the backend based on optional filters.
 * @param {Object} params - Options for difficulty and category
 * @param {string} params.difficulty - Desired difficulty level
 * @param {string} params.category - Desired riddle category
 */
export async function fetchRiddle({ difficulty, category } = {}) {
  const queryParams = new URLSearchParams();
  if (difficulty) queryParams.append('difficulty', difficulty);
  if (category) queryParams.append('category', category);

  const queryString = queryParams.toString();
  const endpoint = `/api/riddles/next${queryString ? `?${queryString}` : ''}`;

  return await apiRequest(endpoint, {
    method: 'GET',
  });
}

/**
 * Step 2: Submit a student's answer to the backend for evaluation.
 * @param {Object} payload - Answer payload containing riddleId and answer text
 * @param {string|number} payload.riddleId - Unique identifier of the riddle
 * @param {string} payload.answer - Student's attempt
 */
export async function verifyAnswer({ riddleId, answer }) {
  return await apiRequest('/api/riddles/check', {
    method: 'POST',
    body: {
      riddle_id: riddleId,
      user_answer: answer,
    },
  });
}

/**
 * Step 3: Mark or skip a riddle when requested by the student.
 * @param {string|number} riddleId - ID of the riddle being skipped
 */
export async function skipRiddle(riddleId) {
  return await apiRequest(`/api/riddles/${riddleId}/skip`, {
    method: 'POST',
  });
}