// React import not required with newer JSX transforms
import Card from '../common/Card';

// =========================================================
// Purpose
// =========================================================
// This file displays one riddle to the user.
// It receives riddle data from PlayPage or a hook.
//
// =========================================================
// What was built
// =========================================================
// Step 1: Accepted a riddle object prop from parent page/hook.
// Step 2: Displayed the riddle question prominently with clean typography.
// Step 3: Rendered difficulty and category metadata tags/badges.
// Step 4: Delegated answer collection to AnswerInput.jsx in the parent layout.
//
// =========================================================
// Data in and data out
// =========================================================
// Data in: Riddle question, category, difficulty, and id.
// Data out: Riddle display UI.
//
// =========================================================
// Connects to
// =========================================================
// - src/pages/PlayPage.jsx
// - src/hooks/useRiddle.js
// - src/components/riddles/AnswerInput.jsx
//
// =========================================================
// Avoid
// =========================================================
// Do not fetch riddles here.
// Do not check answers here.
// Do not store full game state in this display component.
//
// =========================================================
// Beginner checklist
// =========================================================
// [x] Does this file only display one riddle?
// [x] Is answer input kept separate?
// [x] Is API logic kept out of this component?

export default function RiddleCard({
  riddle,
  style = {},
  ...props
}) {
  if (!riddle) {
    return (
      <Card style={style} {...props}>
        <p style={{ color: '#6b7280', fontStyle: 'italic', margin: 0 }}>
          No riddle loaded yet.
        </p>
      </Card>
    );
  }

  const { question, category, difficulty } = riddle;

  const metaContainerStyle = {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const badgeStyle = (bgColor, textColor) => ({
    backgroundColor: bgColor,
    color: textColor,
    fontSize: '0.75rem',
    fontWeight: '600',
    padding: '4px 10px',
    borderRadius: '9999px',
    textTransform: 'capitalize',
  });

  const getDifficultyColors = (diff) => {
    switch (diff?.toLowerCase()) {
      case 'easy':
        return { bg: '#dcfce7', text: '#15803d' };
      case 'medium':
        return { bg: '#fef3c7', text: '#b45309' };
      case 'hard':
        return { bg: '#fee2e2', text: '#b91c1c' };
      default:
        return { bg: '#f3f4f6', text: '#374151' };
    }
  };

  const diffColors = getDifficultyColors(difficulty);

  return (
    <Card
      title={
        <div style={metaContainerStyle}>
          {category && (
            <span style={badgeStyle('#e0e7ff', '#4338ca')}>
              {category}
            </span>
          )}
          {difficulty && (
            <span style={badgeStyle(diffColors.bg, diffColors.text)}>
              {difficulty}
            </span>
          )}
        </div>
      }
      style={style}
      {...props}
    >
      {/* Step 2: Show the riddle question clearly */}
      <div style={{ padding: '8px 0' }}>
        <p
          style={{
            fontSize: '1.25rem',
            lineHeight: '1.6',
            fontWeight: '500',
            color: '#111827',
            margin: 0,
          }}
        >
          {question}
        </p>
      </div>
    </Card>
  );
}