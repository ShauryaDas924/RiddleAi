import { useState, useEffect, useCallback } from 'react';
import { fetchRiddle, verifyAnswer } from '../api/riddleApi';

// =========================================================
// Purpose
// =========================================================
// This file contains reusable state logic for the play flow.
// A custom hook keeps PlayPage smaller and easier to read.
//
// =========================================================
// What was built
// =========================================================
// Step 1: Tracked the current active riddle object.
// Step 2: Tracked explicit loading, error, and validation result feedback states.
// Step 3: Implemented riddleApi.js integrations for secure interaction processing.
// Step 4: Exported normalized states and action wrapper callbacks back to PlayPage.
//
// =========================================================
// Data in and data out
// =========================================================
// Data in: Difficulty, category, and student actions.
// Data out: Current riddle state, result state, and helper actions.
//
// =========================================================
// Connects to
// =========================================================
// - src/pages/PlayPage.jsx
// - src/api/riddleApi.js
// - src/components/riddles/*
//
// =========================================================
// Avoid
// =========================================================
// Do not put visual markup here.
// Do not call Supabase or AI providers directly from the frontend.
//
// =========================================================
// Beginner checklist
// =========================================================
// [x] Does this hook make PlayPage simpler?
// [x] Are API calls routed through riddleApi.js?
// [x] Are loading and error states included?

export default function useRiddle({ difficulty, category }) {
  // Step 1: Manage active puzzle configuration
  const [currentRiddle, setCurrentRiddle] = useState(null);
  
  // Step 2: Operational boundary handlers
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [feedback, setFeedback] = useState(null);

  // Step 3: Fetch next riddle implementation block
  const fetchNextRiddle = useCallback(async (options = {}) => {
    setLoading(true);
    setError(null);
    setFeedback(null);

    const targetDifficulty = options.newDifficulty || difficulty;
    const targetCategory = options.newCategory || category;

    try {
      const data = await fetchRiddle({ difficulty: targetDifficulty, category: targetCategory });
      setCurrentRiddle(data);
    } catch (err) {
      setError(err.message || 'Could not fetch a riddle from the server.');
    } finally {
      setLoading(false);
    }
  }, [difficulty, category]);

  // Automatically request initial riddle asset state lifecycle hook
  useEffect(() => {
    fetchNextRiddle();
  }, [fetchNextRiddle]);

  // Step 3 (Continued): Submit answer checkpoint logic
  const submitAnswer = async (userAnswer) => {
    if (!currentRiddle) return;
    setError(null);

    try {
      const result = await verifyAnswer({
        riddleId: currentRiddle.id,
        answer: userAnswer
      });
      // Track response feedback values: { isCorrect: boolean, hint: string, explanation: string }
      setFeedback(result);
    } catch (err) {
      setError(err.message || 'Failed to submit your answer validation parameters.');
    }
  };

  // Step 4: Simple skip helper action mapping
  const skipCurrentRiddle = () => {
    fetchNextRiddle();
  };

  // Step 4: Return plain data parameters to clean consumer layout
  return {
    currentRiddle,
    loading,
    error,
    feedback,
    submitAnswer,
    fetchNextRiddle,
    skipCurrentRiddle
  };
}