import React, { useState, useEffect } from 'react';
import ProgressSummary from '../components/user/ProgressSummary';
// Assuming a userApi layer exists to interact with the Python history service
import { fetchUserProgress } from '../api/userApi';

// =========================================================
// Purpose
// =========================================================
// This file shows student progress and history.
// It helps students see how they are improving.
//
// =========================================================
// What was built
// =========================================================
// Step 1: Loaded user progress and history data from the backend.
// Step 2: Rendered the ProgressSummary component using live state.
// Step 3: Added a simple riddle history feed section below.
// Step 4: Kept the dashboard small, intuitive, and highly readable.
//
// =========================================================
// Data in and data out
// =========================================================
// Data in: Progress stats and riddle history from the backend.
// Data out: Dashboard UI.
//
// =========================================================
// Connects to
// =========================================================
// - src/components/user/ProgressSummary.jsx
// - src/api/userApi.js
// - backend/app/services/riddle_history_service.py
//
// =========================================================
// Avoid
// =========================================================
// Do not build complex analytics too early.
// Do not calculate trusted saved stats only in the browser.
//
// =========================================================
// Beginner checklist
// =========================================================
// [x] Are progress stats simple?
// [x] Is history loaded from the backend later?
// [x] Is the dashboard helpful without being crowded?

export default function DashboardPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Step 1: Fetch stats and history on mount
  useEffect(() => {
    fetchUserProgress()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Failed to load progress data.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p>Loading your riddle dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '20px', color: 'red' }}>
        <h3>Error Loading Dashboard</h3>
        <p>{error}</p>
      </div>
    );
  }

  // Fallback structures match the schemas designed by the Python back-end service
  const stats = data?.stats || { totalSolved: 0, currentStreak: 0, totalPoints: 0 };
  const history = data?.history || [];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <header style={{ marginBottom: '24px' }}>
        <h2>Welcome to Your Dashboard</h2>
        <p style={{ color: '#666' }}>Track your analytical growth and solved enigmas.</p>
      </header>

      {/* Step 2: Show ProgressSummary */}
      <section style={{ marginBottom: '32px' }}>
        <ProgressSummary stats={stats} />
      </section>

      {/* Step 3: Add recent riddle history */}
      <section>
        <h3 style={{ marginBottom: '16px', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>
          Recent Riddle History
        </h3>
        
        {history.length === 0 ? (
          <p style={{ color: '#888', fontStyle: 'italic' }}>
            No riddles answered yet! Head over to the playground to begin.
          </p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {history.map((item) => (
              <li 
                key={item.id} 
                style={{
                  padding: '12px',
                  marginBottom: '8px',
                  borderRadius: '6px',
                  backgroundColor: '#f9f9f9',
                  borderLeft: item.isCorrect ? '4px solid #4caf50' : '4px solid #f44336',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <strong style={{ display: 'block' }}>{item.riddleTitle}</strong>
                  <span style={{ fontSize: '12px', color: '#777' }}>
                    Solved on: {new Date(item.solvedAt).toLocaleDateString()}
                  </span>
                </div>
                <span 
                  style={{
                    fontWeight: 'bold',
                    color: item.isCorrect ? '#4caf50' : '#f44336'
                  }}
                >
                  {item.isCorrect ? `+${item.pointsAwarded} pts` : 'Attempted'}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}