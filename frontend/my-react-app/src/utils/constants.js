// Step 1: Difficulty Levels
export const DIFFICULTY_LEVELS = Object.freeze({
  EASY: 'Easy',
  MEDIUM: 'Medium',
  HARD: 'Hard',
  MYTHIC: 'Mythic'
});

// Step 2: Riddle Categories
export const RIDDLE_CATEGORIES = Object.freeze({
  WORDPLAY: 'Wordplay',
  LOGIC: 'Logic & Math',
  CLASSIC: 'Classic Riddles',
  SITUATIONAL: 'Situational'
});

// Step 3: Route Paths & Game Statuses
export const ROUTES = Object.freeze({
  HOME: '/',
  GAME: '/play',
  LEADERBOARD: '/leaderboard',
  PROFILE: '/profile'
});

export const GAME_STATUS = Object.freeze({
  IDLE: 'IDLE',
  PLAYING: 'PLAYING',
  CORRECT: 'CORRECT',
  INCORRECT: 'INCORRECT',
  HINT_USED: 'HINT_USED',
  GAME_OVER: 'GAME_OVER'
});

// Misc UI Configuration Limits
export const MAX_HINTS_ALLOWED = 3;
export const SCORE_INCREMENT_BASE = 10;