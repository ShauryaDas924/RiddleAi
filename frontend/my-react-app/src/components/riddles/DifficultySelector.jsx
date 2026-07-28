// =========================================================
// Purpose
// =========================================================
// This file lets the student choose a difficulty level.
// Difficulty can be easy, medium, or hard.
//
// =========================================================
// What was built
// =========================================================
// Step 1: Defined standard student-friendly difficulty level options.
// Step 2: Rendered interactive choices as a clean, accessible selector dropdown.
// Step 3: Triggered onChange callback to pass the selected difficulty up to the parent component.
// Step 4: Provided clean difficulty parameters ready for backend route filtering.
//
// =========================================================
// Data in and data out
// =========================================================
// Data in: Current selected difficulty.
// Data out: New selected difficulty.
//
// =========================================================
// Connects to
// =========================================================
// - src/pages/PlayPage.jsx
// - src/pages/SettingsPage.jsx
// - src/hooks/useUserPreferences.js
//
// =========================================================
// Avoid
// =========================================================
// Do not hard-code difficulty behavior in many files.
// Do not generate different riddles from this component directly.
//
// =========================================================
// Beginner checklist
// =========================================================
// [x] Are difficulty options clear?
// [x] Does the selected value leave this component?
// [x] Is backend logic kept on the backend?

const DEFAULT_DIFFICULTIES = [
  { value: 'all', label: 'All Difficulties' },
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' },
];

export default function DifficultySelector({
  selectedDifficulty = 'all',
  onChange,
  difficulties = DEFAULT_DIFFICULTIES,
  disabled = false,
  style = {},
  ...props
}) {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    width: '100%',
    ...style,
  };

  const labelStyle = {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#374151',
  };

  const selectStyle = {
    width: '100%',
    padding: '10px 14px',
    fontSize: '0.95rem',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    backgroundColor: disabled ? '#f3f4f6' : '#ffffff',
    color: '#111827',
    cursor: disabled ? 'not-allowed' : 'pointer',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s ease',
  };

  return (
    <div style={containerStyle} {...props}>
      <label style={labelStyle} htmlFor="difficulty-select">
        Difficulty
      </label>
      <select
        id="difficulty-select"
        value={selectedDifficulty}
        onChange={handleChange}
        disabled={disabled}
        style={selectStyle}
      >
        {difficulties.map((level) => (
          <option key={level.value} value={level.value}>
            {level.label}
          </option>
        ))}
      </select>
    </div>
  );
}