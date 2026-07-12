import React from 'react';
import { useNavigate } from 'react-router-dom';

// =========================================================
// Purpose
// =========================================================
// This file shows a friendly message for unknown pages.
// It helps users recover if they visit a route that does not exist.
//
// =========================================================
// What was built
// =========================================================
// Step 1: Showed a short, creative riddle-themed not-found message.
// Step 2: Added an action button back to the HomePage.
// Step 3: Kept the layout design clean, calm, and highly useful.
//
// =========================================================
// Data in and data out
// =========================================================
// Data in: The current route does not match a known page.
// Data out: A helpful fallback page.
//
// =========================================================
// Connects to
// =========================================================
// - src/App.jsx
// - src/pages/HomePage.jsx
//
// =========================================================
// Avoid
// =========================================================
// Do not show technical error messages to students.
// Do not make this page depend on backend data.
//
// =========================================================
// Beginner checklist
// =========================================================
// [x] Is the message friendly?
// [x] Can the student get back to the app?
// [x] Is the page simple?

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    // Step 2: Clear action back to HomePage
    navigate('/');
  };

  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '60vh', 
        padding: '20px',
        textAlign: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      <div style={{ maxWidth: '480px', margin: '0 auto' }}>
        {/* Step 1 & 3: Clean, friendly layout */}
        <h1 style={{ fontSize: '4rem', margin: '0 0 16px 0', color: '#4f46e5' }}>
          404
        </h1>
        
        <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#1a1a1a' }}>
          A Riddle for You...
        </h2>
        
        <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#4a4a4a', marginBottom: '24px', lineHeight: '1.5' }}>
          "I exist where maps fade and paths break. Turn around, and my illusion will vanish. What am I?"
          <br />
          <span style={{ fontSize: '0.9rem', color: '#777', fontStyle: 'normal', display: 'block', marginTop: '8px' }}>
            Answer: This missing page!
          </span>
        </p>

        {/* Step 2: Clear actionable recovery link */}
        <button
          onClick={handleReturnHome}
          style={{
            padding: '12px 24px',
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#4f46e5',
            backgroundColor: '#f5f3ff',
            border: '2px solid #4f46e5',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#4f46e5';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#f5f3ff';
            e.currentTarget.style.color = '#4f46e5';
          }}
        >
          Return to Safety
        </button>
      </div>
    </div>
  );
}