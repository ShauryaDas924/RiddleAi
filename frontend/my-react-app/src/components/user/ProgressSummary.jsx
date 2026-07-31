// React import not required with the new JSX transform
import Card from '../common/Card';

// =========================================================
// Purpose
// =========================================================
// This file shows a short summary of student progress.
// It displays solved riddles, total attempts, streaks, and favorite categories.
//
// =========================================================
// What was built
// =========================================================
// Step 1: Selected key metrics (solved count, accuracy, streak, favorite category).
// Step 2: Accepted progress data props from DashboardPage.
// Step 3: Displayed numbers in a clean grid card layout with metric badges.
// Step 4: Built a encouraging empty state for new students without history.
//
// =========================================================
// Data in and data out
// =========================================================
// Data in: Progress stats from the backend.
// Data out: Dashboard summary UI.
//
// =========================================================
// Connects to
// =========================================================
// - src/pages/DashboardPage.jsx
// - src/api/userApi.js
// - backend/app/services/riddle_history_service.py
//
// =========================================================
// Avoid
// =========================================================
// Do not calculate trusted progress only in the frontend.
// Do not make the dashboard too complex at the beginning.
//
// =========================================================
// Beginner checklist
// =========================================================
// [x] Are the stats easy to understand?
// [x] Is empty progress handled kindly?
// [x] Is saved progress loaded from the backend later?

export default function ProgressSummary({
  stats = null,
  isLoading = false,
  style = {},
  ...props
}) {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    ...style,
  };

  if (isLoading) {
    return (
      <Card title="Your Progress" {...props}>
        <p style={{ color: '#6b7280', margin: 0, fontStyle: 'italic' }}>
          Loading your stats...
        </p>
      </Card>
    );
  }

  // Step 4: Empty state for new users without history
  const hasHistory = stats && (stats.solvedCount > 0 || stats.totalAttempts > 0);

  if (!hasHistory) {
    return (
      <Card title="Your Progress" {...props}>
        <div style={{ textAlign: 'center', padding: '16px 8px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🧩</div>
          <h3 style={{ fontSize: '1.1rem', color: '#111827', margin: '0 0 6px 0' }}>
            No Riddles Solved Yet
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#6b7280', margin: 0 }}>
            Start solving riddles to track your streak, accuracy, and favorite categories!
          </p>
        </div>
      </Card>
    );
  }

  // Step 1: Extract key statistics
  const {
    solvedCount = 0,
    totalAttempts = 0,
    currentStreak = 0,
    favoriteCategory = 'None',
  } = stats;

  const accuracyRate = totalAttempts > 0
    ? Math.round((solvedCount / totalAttempts) * 100)
    : 0;

  // Step 3: Layout grid for progress cards
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
    gap: '12px',
    marginTop: '8px',
  };

  const statBoxStyle = {
    backgroundColor: '#f9fafb',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '12px',
    textAlign: 'center',
  };

  const numberStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#111827',
    margin: '4px 0 0 0',
  };

  const labelStyle = {
    fontSize: '0.75rem',
    fontWeight: '600',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  };

  return (
    <Card title="Your Progress" style={containerStyle} {...props}>
      <div style={gridStyle}>
        <div style={statBoxStyle}>
          <div style={labelStyle}>Solved</div>
          <div style={numberStyle}>{solvedCount}</div>
        </div>

        <div style={statBoxStyle}>
          <div style={labelStyle}>Accuracy</div>
          <div style={numberStyle}>{accuracyRate}%</div>
        </div>

        <div style={statBoxStyle}>
          <div style={labelStyle}>Streak</div>
          <div style={{ ...numberStyle, color: currentStreak > 0 ? '#d97706' : '#111827' }}>
            {currentStreak} 🔥
          </div>
        </div>

        <div style={statBoxStyle}>
          <div style={labelStyle}>Favorite</div>
          <div style={{ ...numberStyle, fontSize: '1rem', textTransform: 'capitalize', paddingTop: '6px' }}>
            {favoriteCategory}
          </div>
        </div>
      </div>
    </Card>
  );
}