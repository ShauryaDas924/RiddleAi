// React import not required with newer JSX runtimes; removed to avoid unused variable lint error.

// =========================================================
// Purpose
// =========================================================
// This file lets the student choose a riddle category.
// Categories include logic, math, wordplay, science, or history.
//
// =========================================================
// What was built
// =========================================================
// Step 1: Defined standard student-friendly category options with fallback defaults.
// Step 2: Rendered interactive category choices as a accessible dropdown component.
// Step 3: Triggered onChange callbacks to pass new selection up to parent state/hooks.
// Step 4: Provided standard formatted values ready for backend route filtering.
//
// =========================================================
// Data in and data out
// =========================================================
// Data in: Available categories and current category.
// Data out: New selected category.
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
// Do not duplicate category lists in many files.
// Do not save preferences directly from this component unless designed that way.
//
// =========================================================
// Beginner checklist
// =========================================================
// [x] Are category labels student-friendly?
// [x] Does the selected category update the parent?
// [x] Is the source of categories easy to change later?

const DEFAULT_CATEGORIES = [
  { value: 'all', label: 'All Categories' },
  { value: 'logic', label: 'Logic & Puzzles' },
  { value: 'math', label: 'Math & Numbers' },
  { value: 'wordplay', label: 'Wordplay & Riddles' },
  { value: 'science', label: 'Science & Nature' },
  { value: 'history', label: 'History & Culture' },
];

export default function CategorySelector({
  selectedCategory = 'all',
  onChange,
  categories = DEFAULT_CATEGORIES,
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
      <label style={labelStyle} htmlFor="category-select">
        Category
      </label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={handleChange}
        disabled={disabled}
        style={selectStyle}
      >
        {categories.map((cat) => (
          <option key={cat.value} value={cat.value}>
            {cat.label}
          </option>
        ))}
      </select>
    </div>
  );
}