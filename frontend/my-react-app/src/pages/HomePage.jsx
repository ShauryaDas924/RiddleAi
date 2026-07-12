import React from 'react';
import { useNavigate } from 'react-router-dom';

// =========================================================
// Purpose
// =========================================================
// This file is the first page students see.
// It explains the app briefly and guides the student to start playing.
//
// =========================================================
// What was built
// =========================================================
// Step 1: Added a warm, inviting welcome title for Riddle AI.
// Step 2: Described the core learning goal (critical thinking & vocabulary).
// Step 3: Linked a prominent Call-to-Action button to navigate to the PlayPage.
// Step 4: Left layout styling modular, welcoming, and uncluttered.
//
// =========================================================
// Data in and data out
// =========================================================
// Data in: None.
// Data out: Home page UI and programmatic routing to '/play'.
//
// =========================================================
// Connects to
// =========================================================
// - src/App.jsx
// - src/pages/PlayPage.jsx
// - src/components/layout/PageLayout.jsx
//
// =========================================================
// Avoid
// =========================================================
// Do not build a large marketing page.
// Do not put riddle game logic here.
//
// =========================================================
// Beginner checklist
// =========================================================
// [x] Does the page explain what the app does?
// [x] Is there a clear way to start playing?
// [x] Is the page beginner-friendly?

export default function HomePage() {
  const navigate = useNavigate();

  const handleStartGame = () => {
    // Step 3: Action that leads directly to the PlayPage route
    navigate('/play');
  };

  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '70vh', 
        padding: '20px',
        textAlign: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {/* Step 1: Friendly title for Riddle AI */}
        <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#1a1a1a' }}>
          🧙‍♂️ Welcome to Riddle AI!
        </h1>

        {/* Step 2: Short explanation of the learning goal */}
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#4a4a4a', marginBottom: '32px' }}>
          Sharpen your mind and expand your cognitive boundaries! Riddle AI tests your lateral thinking, 
          problem-solving skills, and vocabulary through interactive, smart linguistic puzzles 
          tailored directly to your skill level.
        </p>

        {/* Step 3 & 4: Simple, prominent action button */}
        <button
          onClick={handleStartGame}
          style={{
            padding: '14px 28px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            color: '#fff',
            backgroundColor: '#4f46e5',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 6px -1px rgba(79, 70, 229, 0.2)',
            transition: 'background-color 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4338ca'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4f46e5'}
        >
          Begin the Challenge
        </button>
      </div>
    </div>
  );
}