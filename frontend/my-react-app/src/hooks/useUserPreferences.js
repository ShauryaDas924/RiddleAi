import { useState, useEffect } from 'react';
import { fetchUserPreferences, saveUserPreferences } from '../api/userApi';
import { DIFFICULTY_LEVELS, RIDDLE_CATEGORIES } from '../utils/constants';

// =========================================================
// Purpose
// =========================================================
// This file manages user preference state.
// Preferences include difficulty, categories, and saved settings.
//
// =========================================================
// What was built
// =========================================================
// Step 1: Stored the current preference values using a local state object.
// Step 2: Loaded saved preferences from the backend on initialization.
// Step 3: Saved updated preferences securely through the userApi.js utility layer.
// Step 4: Returned the active states and structural triggers back to components.
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
// [x] Can SettingsPage use this hook easily?
// [x] Is saving handled through userApi.js?
// [x] Are default preferences clear?

export default function useUserPreferences() {
  // Step 1 & Beginner Checklist: Defined fallback defaults matching our system design
  const [preferences, setPreferences] = useState({
    defaultDifficulty: DIFFICULTY_LEVELS.MEDIUM,
    favoriteCategory: RIDDLE_CATEGORIES.LOGIC,
    soundEffectsEnabled: true
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Step 2: Fetch and mount saved user setup metrics
  useEffect(() => {
    async function loadPreferences() {
      try {
        setLoading(true);
        const data = await fetchUserPreferences();
        if (data) {
          setPreferences({
            defaultDifficulty: data.defaultDifficulty || DIFFICULTY_LEVELS.MEDIUM,
            favoriteCategory: data.favoriteCategory || RIDDLE_CATEGORIES.LOGIC,
            soundEffectsEnabled: data.soundEffectsEnabled ?? true
          });
        }
      } catch (err) {
        setError(err.message || 'Failed to retrieve your custom setup values.');
      } finally {
        setLoading(false);
      }
    }

    loadPreferences();
  }, []);

  // Step 3: Handle streaming edits to the back-end application context layer
  const savePreferences = async (updatedValues) => {
    setError(null);
    try {
      const savedData = await saveUserPreferences(updatedValues);
      
      // Update local state instance matching whatever parameters the network committed
      setPreferences(savedData);
      return savedData;
    } catch (err) {
      throw new Error(err.message || 'Could not serialize preference updates upstream.');
    }
  };

  // Step 4: Return plain values, processing indicators, and action triggers
  return {
    preferences,
    loading,
    error,
    savePreferences
  };
}