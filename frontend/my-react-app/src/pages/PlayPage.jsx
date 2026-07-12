import React, { useState } from 'react';
import useRiddle from '../hooks/useRiddle';
import RiddleCard from '../components/riddles/RiddleCard';
import AnswerInput from '../components/riddles/AnswerInput';
import RiddleResult from '../components/riddles/RiddleResult';
import { DIFFICULTY_LEVELS, RIDDLE_CATEGORIES } from '../utils/constants';

// =========================================================
// Purpose
// =========================================================
// This file serves as the main riddle-playing page.
// It coordinates riddle display, answer input, and result feedback.
//
// =========================================================
// What was built
// =========================================================
// Step 1: Used useRiddle.js custom hook to manage loading, riddles, and scoring.
// Step 2: Integrated RiddleCard to render the active enigma text dynamically.
// Step 3: Rendered AnswerInput to capture and handle student answers.
// Step 4: Displayed RiddleResult for instant validation feedback.
// Step 5: Added side panels for difficulty selection, categories, and skip logic.
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
// [x] Does PlayPage coordinate the riddle flow?
// [x] Are display pieces split into components?
// [x] Are backend calls hidden behind hooks or API files?

export default function PlayPage() {
  const [difficulty, setDifficulty] = useState(DIFFICULTY_LEVELS.MEDIUM);
  const [category, setCategory] = useState(RIDDLE_CATEGORIES.LOGIC);

  // Step 1: Manage active riddle session states via custom hook
  const {
    currentRiddle,
    loading,
    error,
    feedback,
    submitAnswer,
    fetchNextRiddle,
    skipCurrentRiddle
  } = useRiddle({ difficulty, category });

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
    fetchNextRiddle({ newDifficulty: e.target.value, newCategory: category });
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    fetchNextRiddle({ newDifficulty: difficulty, newCategory: e.target.value });
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <p>Conjuring a fresh riddle from the archives...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '20px', color: '#d32f2f', textAlign: 'center' }}>
        <h3>Failed to summon riddle</h3>
        <p>{error}</p>
        <button onClick={() => fetchNextRiddle({ difficulty, category })} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Step 5: Filter Configuration Controls */}
      <header style={{ display: 'flex', gap: '16px', marginBottom: '24px', backgroundColor: '#f9f9f9', padding: '16px', borderRadius: '8px' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '14px', fontWeight: 'bold', color: '#555' }}>Difficulty</label>
          <select value={difficulty} onChange={handleDifficultyChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
            {Object.values(DIFFICULTY_LEVELS).map((level) => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '14px', fontWeight: 'bold', color: '#555' }}>Category</label>
          <select value={category} onChange={handleCategoryChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
            {Object.values(RIDDLE_CATEGORIES).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </header>

      {/* Step 2: Dedicated structural component for displaying raw riddle strings */}
      {currentRiddle && (
        <div style={{ marginBottom: '24px' }}>
          <RiddleCard riddle={currentRiddle} />
        </div>
      )}

      {/* Step 4: Conditional placeholder for backend evaluation responses */}
      {feedback && (
        <div style={{ marginBottom: '24px' }}>
          <RiddleResult feedback={feedback} onNext={() => fetchNextRiddle({ difficulty, category })} />
        </div>
      )}

      {/* Step 3: Input control layer */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <AnswerInput 
          onSubmit={submitAnswer} 
          disabled={feedback?.isCorrect} 
        />
        
        {/* Step 5: Optional skip command layout */}
        {!feedback?.isCorrect && (
          <button 
            onClick={skipCurrentRiddle}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#666', 
              textDecoration: 'underline', 
              cursor: 'pointer', 
              alignSelf: 'flex-end',
              fontSize: '14px'
            }}
          >
            I give up, skip this riddle
          </button>
        )}
      </div>

    </div>
  );
}