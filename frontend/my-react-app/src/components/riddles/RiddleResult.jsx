// React import not required with new JSX transform
import Button from '../common/Button';
import Card from '../common/Card';

// =========================================================
// Purpose
// =========================================================
// This file shows the result after an answer is checked.
// It displays correct, incorrect, close, hint, or explanation messages.
//
// =========================================================
// What was built
// =========================================================
// Step 1: Accepted result data props (isCorrect, message, explanation, correctAnswer) from parent.
// Step 2: Rendered encouraging, color-coded feedback messages.
// Step 3: Conditionally revealed explanation and correct answer when provided by backend.
// Step 4: Added next-riddle and try-again action triggers.
//
// =========================================================
// Data in and data out
// =========================================================
// Data in: Correctness status, feedback text, hint, and answer reveal.
// Data out: Feedback UI for the student.
//
// =========================================================
// Connects to
// =========================================================
// - src/pages/PlayPage.jsx
// - src/hooks/useRiddle.js
// - backend/app/services/answer_checking_service.py
//
// =========================================================
// Avoid
// =========================================================
// Do not decide correctness here.
// Do not make feedback harsh or confusing.
//
// =========================================================
// Beginner checklist
// =========================================================
// [x] Is feedback clear and encouraging?
// [x] Is answer-checking logic outside this component?
// [x] Does the UI handle no result yet?

export default function ResultCard({
  result,
  onNext,
  onRetry,
  style = {},
  ...props
}) {
  // Step 3 (Checklist): Return null if no result has been generated yet
  if (!result) return null;

  const {
    isCorrect,
    message,
    explanation,
    correctAnswer,
    hint,
  } = result;

  // Determine color scheme based on outcome
  const getOutcomeStyles = () => {
    if (isCorrect) {
      return {
        bg: '#f0fdf4',
        border: '#bbf7d0',
        titleColor: '#166534',
        icon: '🎉',
        heading: 'Spot On!',
      };
    }
    if (hint) {
      return {
        bg: '#fffbeb',
        border: '#fde68a',
        titleColor: '#92400e',
        icon: '💡',
        heading: 'Getting Closer!',
      };
    }
    return {
      bg: '#fef2f2',
      border: '#fecaca',
      titleColor: '#991b1b',
      icon: '🤔',
      heading: 'Not Quite Yet',
    };
  };

  const statusStyle = getOutcomeStyles();

  const cardCustomStyle = {
    backgroundColor: statusStyle.bg,
    borderColor: statusStyle.border,
    ...style,
  };

  const actions = (
    <>
      {!isCorrect && onRetry && (
        <Button variant="secondary" onClick={onRetry}>
          Try Again
        </Button>
      )}
      {onNext && (
        <Button variant="primary" onClick={onNext}>
          Next Riddle
        </Button>
      )}
    </>
  );

  return (
    <Card
      title={`${statusStyle.icon} ${statusStyle.heading}`}
      actions={actions}
      style={cardCustomStyle}
      {...props}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Step 2: Show friendly message */}
        {message && (
          <p
            style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: statusStyle.titleColor,
              margin: 0,
            }}
          >
            {message}
          </p>
        )}

        {/* Display hint if answer was close */}
        {hint && (
          <div
            style={{
              padding: '10px 14px',
              backgroundColor: '#ffffff',
              borderRadius: '6px',
              borderLeft: '4px solid #f59e0b',
              fontSize: '0.9rem',
              color: '#78350f',
            }}
          >
            <strong>Hint:</strong> {hint}
          </div>
        )}

        {/* Step 3: Show the correct answer only when backend reveals it */}
        {correctAnswer && (
          <div style={{ fontSize: '0.95rem', color: '#1f2937' }}>
            <strong>Correct Answer:</strong>{' '}
            <span style={{ fontWeight: '600', color: '#059669' }}>
              {correctAnswer}
            </span>
          </div>
        )}

        {/* Step 3: Explanation block */}
        {explanation && (
          <p
            style={{
              fontSize: '0.9rem',
              lineHeight: '1.5',
              color: '#4b5563',
              margin: 0,
            }}
          >
            {explanation}
          </p>
        )}
      </div>
    </Card>
  );
}