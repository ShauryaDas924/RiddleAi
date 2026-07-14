import React from 'react';

// =========================================================
// Purpose
// =========================================================
// This file contains a reusable loading indicator.
// It appears while the app waits for backend responses.
//
// =========================================================
// What was built
// =========================================================
// Step 1: Designed a visual CSS-based spinner alongside an optional message.
// Step 2: Kept it compact, accessible (aria-live), and customizable.
// Step 3: Structured it to replace inline string loading blocks globally.
//
// =========================================================
// Data in and data out
// =========================================================
// Data in: Optional loading message.
// Data out: A visual loading state for the student.
//
// =========================================================
// Connects to
// =========================================================
// - src/pages/PlayPage.jsx
// - src/pages/DashboardPage.jsx
// - src/hooks/useRiddle.js
//
// =========================================================
// Avoid
// =========================================================
// Do not start API calls from this component.
// Do not hide errors by showing loading forever.
//
// =========================================================
// Beginner checklist
// =========================================================
// [x] Is the loading state clear?
// [x] Can this be reused on multiple pages?
// [x] Are loading decisions made outside this component?

export default function LoadingIndicator({
  message = 'Loading...',
  size = 'medium',
  fullPage = false,
  style = {},
  ...props
}) {
  // Define size dimensions
  const sizes = {
    small: { width: '20px', height: '20px', borderSize: '2.5px' },
    medium: { width: '40px', height: '40px', borderSize: '4px' },
    large: { width: '60px', height: '60px', borderSize: '6px' },
  };

  const currentSize = sizes[size] || sizes.medium;

  // Container styling based on layout intent
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    ...(fullPage && {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.85)',
      zIndex: 9999,
    }),
    ...style,
  };

  const spinnerStyle = {
    width: currentSize.width,
    height: currentSize.height,
    border: `${currentSize.borderSize} solid #f3f3f3`,
    borderTop: `${currentSize.borderSize} solid #4f46e5`,
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  const textStyle = {
    marginTop: '12px',
    fontSize: size === 'small' ? '13px' : '15px',
    color: '#4b5563',
    fontWeight: '500',
  };

  return (
    <div style={containerStyle} aria-live="polite" aria-busy="true" {...props}>
      {/* Inject animation keyframe dynamically once */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <div style={spinnerStyle} />
      {message && <p style={textStyle}>{message}</p>}
    </div>
  );
}