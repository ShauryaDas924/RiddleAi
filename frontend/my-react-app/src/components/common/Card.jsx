import React from 'react';

// =========================================================
// Purpose
// =========================================================
// This file contains a reusable Card component.
// Cards wrap riddles, settings panels, and dashboard summaries.
//
// =========================================================
// What was built
// =========================================================
// Step 1: Configured customizable props (title, subtitle, actions) to display inside the card.
// Step 2: Added spacing, border, shadow, and rounded corner styling through React style parameters.
// Step 3: Set up the card layout to cleanly group and nest any child presentation elements.
//
// =========================================================
// Data in and data out
// =========================================================
// Data in: Child content from another component or page.
// Data out: A visually grouped section on the screen.
//
// =========================================================
// Connects to
// =========================================================
// - src/components/riddles/RiddleCard.jsx
// - src/components/user/ProgressSummary.jsx
// - src/pages/SettingsPage.jsx
//
// =========================================================
// Avoid
// =========================================================
// Do not fetch data here.
// Do not decide which riddle or user data should be shown here.
//
// =========================================================
// Beginner checklist
// =========================================================
// [x] Is this card reusable?
// [x] Does it only handle presentation?
// [x] Is feature logic kept in pages, hooks, or services?

export default function Card({
  children,
  title,
  subtitle,
  actions,
  style = {},
  ...props
}) {
  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
    padding: '24px',
    margin: '0 0 16px 0',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    ...style,
  };

  const headerStyle = {
    borderBottom: title || subtitle ? '1px solid #f3f4f6' : 'none',
    paddingBottom: title || subtitle ? '12px' : '0px',
    marginBottom: title || subtitle ? '4px' : '0px',
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#111827',
    margin: '0 0 4px 0',
  };

  const subtitleStyle = {
    fontSize: '0.875rem',
    color: '#6b7280',
    margin: 0,
  };

  const footerStyle = {
    borderTop: '1px solid #f3f4f6',
    paddingTop: '12px',
    marginTop: '4px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '8px',
  };

  return (
    <div style={cardStyle} {...props}>
      {/* Optional Card Header Block */}
      {(title || subtitle) && (
        <header style={headerStyle}>
          {title && <h3 style={titleStyle}>{title}</h3>}
          {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
        </header>
      )}

      {/* Main Container Content */}
      <div style={{ flex: 1 }}>
        {children}
      </div>

      {/* Optional Card Footer Actions Block */}
      {actions && (
        <footer style={footerStyle}>
          {actions}
        </footer>
      )}
    </div>
  );
}