import { useState } from 'react';
import Button from '../common/Button';

// =========================================================
// Purpose
// =========================================================
// This file collects the student's answer.
// It is focused on typing and submitting an answer.
//
// =========================================================
// What was built
// =========================================================
// Step 1: Rendered a styled input field for student text input.
// Step 2: Integrated reusable Button component for submission.
// Step 3: Passed the typed answer string upward via onSubmit prop callback.
// Step 4: Disabled inputs and submit controls while checking or loading.
//
// =========================================================
// Data in and data out
// =========================================================
// Data in: Current answer text and loading state if needed.
// Data out: Submitted answer text.
//
// =========================================================
// Connects to
// =========================================================
// - src/pages/PlayPage.jsx
// - src/hooks/useRiddle.js
// - src/components/common/Button.jsx
//
// =========================================================
// Avoid
// =========================================================
// Do not decide if the answer is correct here.
// Do not call the AI provider or Supabase from this component.
//
// =========================================================
// Beginner checklist
// =========================================================
// [x] Can the student type an answer?
// [x] Does submit send the answer upward?
// [x] Is answer checking handled elsewhere?

export default function AnswerInput({
  onSubmit,
  isSubmitting = false,
  placeholder = 'Type your answer here...',
  style = {},
  ...props
}) {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!answer.trim() || isSubmitting) return;

    if (onSubmit) {
      onSubmit(answer.trim());
    }
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    width: '100%',
    boxSizing: 'border-box',
    ...style,
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    transition: 'border-color 0.2s ease',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle} {...props}>
      {/* Step 1: Text input for answer */}
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder={placeholder}
        disabled={isSubmitting}
        style={inputStyle}
      />

      {/* Step 2 & 3: Submit trigger */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          type="submit"
          variant="primary"
          disabled={isSubmitting || !answer.trim()}
        >
          {isSubmitting ? 'Checking...' : 'Submit Answer'}
        </Button>
      </div>
    </form>
  );
}