import { useState, useEffect } from 'react';
import DifficultySelector from './DifficultySelector';
import CategorySelector from './CategorySelector';
import Button from '../common/Button';
import Card from '../common/Card';

// =========================================================
// Purpose
// =========================================================
// This file lets the student edit preferences.
// Preferences include favorite categories and preferred difficulty.
//
// =========================================================
// What was built
// =========================================================
// Step 1: Rendered DifficultySelector and CategorySelector inside a form layout.
// Step 2: Managed local selection state with clean change handlers.
// Step 3: Passed updated preference payload upward via onSave prop callback.
// Step 4: Implemented status banners for saved success and error states.
//
// =========================================================
// Data in and data out
// =========================================================
// Data in: Current preference values.
// Data out: Updated preference values.
//
// =========================================================
// Connects to
// =========================================================
// - src/pages/SettingsPage.jsx
// - src/hooks/useUserPreferences.js
// - src/components/riddles/DifficultySelector.jsx
// - src/components/riddles/CategorySelector.jsx
//
// =========================================================
// Avoid
// =========================================================
// Do not store secret user data in the browser.
// Do not mix dashboard stats into this preferences form.
//
// =========================================================
// Beginner checklist
// =========================================================
// [x] Can preferences be edited clearly?
// [x] Are save actions handled by the parent or hook?
// [x] Are preference fields kept simple?

export default function PreferencesForm({
  initialPreferences = { difficulty: 'all', category: 'all' },
  onSave,
  isSaving = false,
  statusMessage = null,
  errorMessage = null,
  style = {},
  ...props
}) {
  const [difficulty, setDifficulty] = useState(initialPreferences.difficulty || 'all');
  const [category, setCategory] = useState(initialPreferences.category || 'all');

  // Keep local form state in sync if initialPreferences update from hook
  useEffect(() => {
    if (!initialPreferences) {
      return;
    }

    const nextDifficulty = initialPreferences.difficulty || 'all';
    const nextCategory = initialPreferences.category || 'all';

    if (difficulty !== nextDifficulty) {
      // Sync local form state when external preferences change.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDifficulty(nextDifficulty);
    }

    if (category !== nextCategory) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCategory(nextCategory);
    }
  }, [initialPreferences, difficulty, category]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave({ difficulty, category });
    }
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    ...style,
  };

  const feedbackBannerStyle = (isError) => ({
    padding: '10px 14px',
    borderRadius: '6px',
    fontSize: '0.875rem',
    fontWeight: '500',
    backgroundColor: isError ? '#fef2f2' : '#f0fdf4',
    color: isError ? '#991b1b' : '#166534',
    border: `1px solid ${isError ? '#fecaca' : '#bbf7d0'}`,
  });

  return (
    <Card title="Learning Preferences" {...props}>
      <form onSubmit={handleSubmit} style={formStyle}>
        {/* Step 4: Status / Error banners */}
        {errorMessage && (
          <div style={feedbackBannerStyle(true)}>{errorMessage}</div>
        )}
        {statusMessage && !errorMessage && (
          <div style={feedbackBannerStyle(false)}>{statusMessage}</div>
        )}

        {/* Step 1 & 2: Difficulty and Category Controls */}
        <DifficultySelector
          selectedDifficulty={difficulty}
          onChange={setDifficulty}
          disabled={isSaving}
        />

        <CategorySelector
          selectedCategory={category}
          onChange={setCategory}
          disabled={isSaving}
        />

        {/* Step 3: Send new values upward */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
          <Button type="submit" variant="primary" disabled={isSaving}>
            {isSaving ? 'Saving...' : 'Save Preferences'}
          </Button>
        </div>
      </form>
    </Card>
  );
}